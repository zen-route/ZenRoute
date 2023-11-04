from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser
from django.db import models

class ZenUser(AbstractUser):
    email = models.EmailField(unique=True)
    trip = models.TextField(blank=True, null=True)
    full_name = models.CharField(max_length=255, blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
