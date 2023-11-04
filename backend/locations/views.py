from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from utils.getFeelGoodPath import getFeelGoodPaths

"""
example json needed after GPT simplifies the string
{
    "source_lon": 77.681345 ,   decimal field upto length 30 and 20 decimal places
    "source_lat":  13.112519,   decimal field upto length 30 and 20 decimal places
    "destination":"Cubbon Park",  string field
    "time": 15000,   minutes, integer field
    "categories": "Lakes, Temples"     can be of 5 types - Lakes, Parks, Dineouts, Temples, Viewpoints all comma separated, string field
    "extra_requirements": "I want to take my dog as well so add places only in which dogs are allowed"   string field
}
"""

# TODO- complete function that simplifies the string using GPT into above json format


def simplifyString(string):
    response = {
        "source_lon": 77.681345,
        "source_lat":  13.112519,
        "destination": "Cubbon Park",
        "time": 2500,
        "categories": "Lakes, Temples"
    }
    return response  # should return the above example json format

# TODO- feed in all the paths in gpt4 that getFeelGoodPath returns and return the best 3


def analyzeRoutes(paths, conditions=None):
    pass


class RouteView(APIView):
    def post(self, request):

        text = request.data['text']

        data = simplifyString(text)
        source_lat = data['source_lat']
        source_lon = data['source_lon']
        destination = data['destination']
        time = data['time']
        # convert comma separated string to list
        categories = data['categories'].split(',')

        # get all the paths in list format
        paths = getFeelGoodPaths(source_lat, source_lon, destination, categories, time) #list of paths
        print(paths)

        # resultant_routes = analyzeRoutes(paths, data['extra_requirements'])
        resultant_routes = []

        return Response(resultant_routes, status=status.HTTP_200_OK)



#paths example output:
"""
[[1, 2144.7, [['source', 13.112519, 77.681345], ['Sankey Tank', 13.011181, 77.574593], ['Cubbon Park', 12.974244, 77.592195]]], [1, 2284.2, [['source', 13.112519, 77.681345], ['Nagavara lake', 13.045011, 77.609064], ['Cubbon Park', 12.974244, 77.592195]]], [1, 2289.2, [['source', 13.112519, 77.681345], ['Ramapura Kere', 13.047197, 77.685142], ['Cubbon Park', 12.974244, 77.592195]]], [1, 2327.1, [['source', 13.112519, 77.681345], ['Kempambudhi Kere', 12.958467, 77.56093], ['Cubbon Park', 12.974244, 77.592195]]], [1, 2395.6, [['source', 13.112519, 77.681345], ['Bagmane Lake', 12.979188, 77.655151], ['Cubbon Park', 12.974244, 77.592195]]], [0, 1603.1, [['source', 13.112519, 77.681345], ['Cubbon Park', 12.974244, 77.592195]]]]


each path starts from source and ends on destination (here cubbon park). each stop is in format of [name, lat, lon]
"""