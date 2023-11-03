"""
ASGI config for api project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'api.settings')

application = get_asgi_application()


park_data = [
   ('Park1', 'Address1', 12.9715987, 77.5945627, 'Parks')
]

from ..locations.models import Place

for park in park_data:
   p = Place(
       name=park[0],
       address=park[1],
       latitude=park[2],
       longitude=park[3],
       category=park[4],
   )
   p.save()
