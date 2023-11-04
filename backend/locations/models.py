from django.db import models
from user.models import CustomUser as User

class Place(models.Model):
    
    CATEGORIES= (
        ('Parks', 'Parks'),
        ('Lakes', 'Lakes'),
        ('Forts', 'Forts'),
        ('Temples', 'Temples'),
        ('Dineout', 'Dineout'),
        ('Viewpoints', 'Viewpoints'),
    )
    
    latitude = models.DecimalField(max_digits=30, decimal_places=20)
    longitude = models.DecimalField(max_digits=30, decimal_places=20)
    name = models.CharField(max_length=1000)
    address = models.CharField(max_length=1000)
    category = models.CharField(max_length=100, choices=CATEGORIES)

    def __str__(self):
        return self.name

class Stop(models.Model):
    name = models.CharField(max_length=255)
    lat = models.FloatField()
    lon = models.FloatField()

class Trip(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    source_name = models.CharField(max_length=255)
    source_lat = models.FloatField()
    source_lon = models.FloatField()
    stops = models.ManyToManyField(Stop)
    destination_name = models.CharField(max_length=255)
    destination_lat = models.FloatField()
    destination_lon = models.FloatField()
