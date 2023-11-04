from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from utils.getFeelGoodPath import getFeelGoodPaths, get_lat_lon
from .serializers import RouteSerializer, GeocodeSerializer, SaveTripSerializer, StopSerializer
from rest_framework import permissions

"""
example json needed after GPT simplifies the string
{
    "source_lon": 77.681345 ,   decimal field upto length 30 and 20 decimal places
    "source_lat":  13.112519,   decimal field upto length 30 and 20 decimal places
    "destination":"Cubbon Park",  string field
    "time": 15000,   minutes, integer field
    "categories": "Lakes,Parks"     can be of 5 types - Lakes, Parks, Dineouts, Temples, Viewpoints all comma separated, string field
    }
"""


class RouteView(APIView):
    def post(self, request):
        #verify the data from the serializer
        serializer = RouteSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        source_lat = serializer.validated_data['source_lat']
        source_lon = serializer.validated_data['source_lon']
        destination = serializer.validated_data['destination']
        time = serializer.validated_data['time']
        categories_data = serializer.validated_data['categories']

        # convert comma separated string to list and chop of the spaces
        categories = [category.strip() for category in categories_data.split(',')]

        paths = getFeelGoodPaths(source_lat, source_lon, destination, categories, time) #list of paths
        resultant_routes = paths

        return Response(resultant_routes, status=status.HTTP_200_OK)


class GeocodeView(APIView):
    def post(self, request):
        serializer = GeocodeSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        name = request.data.get("name")
        response = get_lat_lon(name)
        if response.status_code == 200:
            return Response(response.data, status=status.HTTP_200_OK)
        else:
            return Response({'message': response.data['message']}, status=response.status_code)
        
class SaveTripView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    
    def post(self, request):
        user = request.user
        trip_data = request.data
        stop_data = trip_data.pop('stops', [])

        trip_serializer = SaveTripSerializer(data=trip_data)
        if trip_serializer.is_valid():
            trip = trip_serializer.save(user=user)

            stop_serializer = StopSerializer(data=stop_data, many=True)
            if stop_serializer.is_valid():
                stops = stop_serializer.save()
                trip.stops.set(stops)

                return Response(trip_serializer.data, status=status.HTTP_201_CREATED)
            else:
                trip.delete()
                return Response(stop_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(trip_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

#paths example output:
"""
[[1, 2144.7, [['source', 13.112519, 77.681345], ['Sankey Tank', 13.011181, 77.574593], ['Cubbon Park', 12.974244, 77.592195]]], [1, 2284.2, [['source', 13.112519, 77.681345], ['Nagavara lake', 13.045011, 77.609064], ['Cubbon Park', 12.974244, 77.592195]]], [1, 2289.2, [['source', 13.112519, 77.681345], ['Ramapura Kere', 13.047197, 77.685142], ['Cubbon Park', 12.974244, 77.592195]]], [1, 2327.1, [['source', 13.112519, 77.681345], ['Kempambudhi Kere', 12.958467, 77.56093], ['Cubbon Park', 12.974244, 77.592195]]], [1, 2395.6, [['source', 13.112519, 77.681345], ['Bagmane Lake', 12.979188, 77.655151], ['Cubbon Park', 12.974244, 77.592195]]], [0, 1603.1, [['source', 13.112519, 77.681345], ['Cubbon Park', 12.974244, 77.592195]]]]


each path starts from source and ends on destination (here cubbon park). each stop is in format of [name, lat, lon]
"""