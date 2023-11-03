import requests
import heapq

class Node:
    def __init__(self, name, lat, lon):
        self.name = name
        self.lat = lat
        self.lon = lon
        self.edges = []

class Edge:
    def __init__(self, to, timeReq, feel_good):
        self.to = to
        self.timeReq = timeReq
        self.feel_good = feel_good

def getFeelGoodPath(source, destination, available_time):
    queue = [(0, 0, source, [])]
    visited = set()

    while queue:
        (feel_good_count, time_spent, node, path) = heapq.heappop(queue)

        if node not in visited:
            visited.add(node)
            path = path + [node]

            if node == destination:
                if time_spent <= available_time:
                    return (-feel_good_count, time_spent, path)
            
            print('node: ', node.name)
            for edge in node.edges:
                if edge.to not in visited:
                    print('edge.to: ', edge.to.name)
                    total_feel_good = feel_good_count - edge.feel_good
                    total_time = time_spent + edge.timeReq
                    print('total_time: ', total_time)
                    print('total_feel_good: ', -total_feel_good)
                    if total_time <= available_time:
                        heapq.heappush(queue, (total_feel_good, total_time, edge.to, path))
                        
            print('\n')

    return (0, 0, [])

__all__ = ['Node', 'Edge', 'Graph', 'getFeelGoodPath']

if __name__ == "__main__":
    # step 1: get nodes array from database
    source_name = "Hulimavu Lake"
    destination_name = "Chikkabelanduru lake"
    nodes = [Node("Hulimavu Lake", 12.8700, 77.6042), Node("Gotigere Tank", 12.85335, 77.59037), Node("something", 12.87226, 77.65923), Node("Chikkabelanduru lake", 12.91226, 77.71923)]
    
    # step 2: call the api to get the time taken to travel between each node
    API_URL = 'http://router.project-osrm.org/table/v1/driving/'
    for node in nodes:
        API_URL += str(node.lon) + ',' + str(node.lat) + ';'
    API_URL = API_URL[:-1]
    API_URL += '?annotations=duration'
    response = requests.get(API_URL)
    durations = response.json()['durations']
    
    print('durations: ', durations)
    
    # step 3: create the graph
    for i in range(len(nodes)):
        for j in range(len(nodes)):
            if i == j:
                continue
            
            timeReq = durations[i][j]
            feelGood = 1 if (nodes[j].name != source_name and nodes[j].name != destination_name) else 0
            nodes[i].edges.append(Edge(nodes[j], timeReq, feelGood))

    # step 4: call the getFeelGoodPath function
    (feel_good_count, time_spent, path) = getFeelGoodPath(nodes[0], nodes[3], 2500)
    print('time spent: ', time_spent)
    print('feel good count: ', feel_good_count)
    for node in path:
        print(node.name)
    