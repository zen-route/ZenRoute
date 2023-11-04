import heapq
import requests
import json
from rest_framework import status
from locations.models import Place
from rest_framework.response import Response
from decimal import Decimal
import itertools


class Node:
    _ids = itertools.count()
    def __init__(self, name, lat, lon):
        self.id = next(self._ids)
        self.name = name
        self.lat = lat
        self.lon = lon
        self.edges = []
        
    def __lt__(self, other):
        # Compare nodes based on their IDs
        return self.id < other.id


class Edge:
    def __init__(self, to, timeReq, feel_good):
        self.to = to
        self.timeReq = timeReq
        self.feel_good = feel_good
        
class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, Decimal):
            return float(o)
        return super().default(o)


def get_lat_lon(place_name):
    nominatim_endpoint = "https://nominatim.openstreetmap.org/search"
    params = {
        'q': place_name,
        'format': 'json',
    }
    response = requests.get(nominatim_endpoint, params=params)
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()

        if len(data) > 0:
            # Extract the latitude and longitude from the first result
            lat = data[0]['lat']
            lon = data[0]['lon']
            return Response({'lat': lat, 'lon': lon}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'No coordiantes found for this destiantion'}, status=status.HTTP_404_NOT_FOUND)
    else:
        return Response({'message': 'Unable to access nominatim'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def algoGetFeelGoodPath(source, destination, available_time):
    queue = [(0, 0, source, [])]
    visited = set()
    top_paths = []  # list to store the top 3 paths

    while queue:
        (feel_good_count, time_spent, node, path) = heapq.heappop(queue)

        path = path + [node]

        if node == destination and time_spent <= available_time:
            # add the path to the list
            top_paths.append((feel_good_count, time_spent, path))
            top_paths = sorted(top_paths, key=lambda x: x[0], reverse=True)
            continue

        if node not in visited:
            visited.add(node)
            for edge in node.edges:
                if edge.to not in visited:
                    total_feel_good = feel_good_count + edge.feel_good
                    total_time = time_spent + edge.timeReq
                    if total_time <= available_time:
                        heapq.heappush(queue, (total_feel_good, total_time, edge.to, path))

    # return the paths in the list
    return top_paths


def getFeelGoodPaths(source_lat, source_lon, destination, categories, time):

    # step 1: get lat lon coorindates of destination from the text using nominatim
    response = get_lat_lon(destination)

    if response.status_code == 200:
        destination_lat = response.data['lat']
        destination_lon = response.data['lon']
    else:
        return Response({'message': response.data['message']}, status=response.status_code)

    # step 2: get nodes array from database
    #pick only 10 places from each category
    
    if len(categories)==2:
        feel_good_places = []
        for category in categories:
            places = Place.objects.filter(category=category)[:10]
            feel_good_places.extend(places.values())
    elif len(categories)==3:
        feel_good_places = []
        for category in categories:
            places = Place.objects.filter(category=category)[:7]
            feel_good_places.extend(places.values())
    elif len(categories)==4:
        feel_good_places = []
        for category in categories:
            places = Place.objects.filter(category=category)[:5]
            feel_good_places.extend(places.values())
    elif len(categories)==5:
        feel_good_places = []
        for category in categories:
            places = Place.objects.filter(category=category)[:4]
            feel_good_places.extend(places.values())
    else:
        feel_good_places = []
        places = Place.objects.filter(category=categories[0])[:20]
        feel_good_places.extend(places.values())
        
        
    # #save feel_good_places in a json file
    # with open('feel_good_places.json', 'w') as f:
    #     json.dump(feel_good_places, f, cls=DecimalEncoder)
    nodes = list()

    # append src and destiantion to nodes, src in start and destn at end
    nodes.append(Node("source", source_lat, source_lon))
    nodes.append(Node(destination, destination_lat, destination_lon))

    count = 0

    for node in feel_good_places:
        count += 1
        if count == 20:
            break
        nodes.append(Node(node['name'], node['latitude'], node['longitude']))

    API_URL = 'http://router.project-osrm.org/table/v1/driving/'
    for node in nodes:
        API_URL += str(node.lon) + ',' + str(node.lat) + ';'
        
    API_URL = API_URL[:-1]
    API_URL += '?annotations=duration'
    response = requests.get(API_URL)
    durations = response.json()['durations']

    # # step 3: create the graph
    for i in range(len(nodes)):
        for j in range(len(nodes)):
            if i == j:
                continue

            timeReq = durations[i][j]
            feelGood = 1 if (
                nodes[j].name != "source" and nodes[j].name != destination) else 0
            nodes[i].edges.append(Edge(nodes[j], timeReq, feelGood))

    # src, destn, available_time
    ans = algoGetFeelGoodPath(nodes[0], nodes[1], time)
    converted_list = [[t[0], round(float(t[1]), 2), [[node.name, round(float(node.lat), 6), round(float(node.lon), 6)] for node in t[2]]] for t in ans]
    return converted_list
    
