from django.db import models

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

