from rest_framework import serializers

class RouteSerializer(serializers.Serializer):
    source_lat = serializers.DecimalField(max_digits=30, decimal_places=20)
    source_lon = serializers.DecimalField(max_digits=30, decimal_places=20)
    destination = serializers.CharField(max_length=100)
    categories = serializers.CharField(max_length=1000)
    time = serializers.IntegerField()
    
class GeocodeSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=500)