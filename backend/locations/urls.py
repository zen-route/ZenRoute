from django.urls import path
from .views import *

urlpatterns = [
    path('route/', RouteView.as_view()),
    path('geocode/', GeocodeView.as_view()),
]