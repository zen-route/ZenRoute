from rest_framework import serializers
from .models import Stop, Trip

class RouteSerializer(serializers.Serializer):
    source_lat = serializers.DecimalField(max_digits=30, decimal_places=20)
    source_lon = serializers.DecimalField(max_digits=30, decimal_places=20)
    destination = serializers.CharField(max_length=100)
    categories = serializers.CharField(max_length=1000)
    time = serializers.IntegerField()
    
class GeocodeSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=500)
    
class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stop
        fields = ['name', 'lat', 'lon']

class SaveTripSerializer(serializers.ModelSerializer):
    source = LocationSerializer()
    stops = LocationSerializer(many=True)
    destination = LocationSerializer()
    
    class Meta:
        model = Trip
        fields = ['source', 'stops', 'destination']
    
    
class StopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stop
        fields = ['name', 'lat', 'lon']