from django.urls import path
from .views import RouteView, GeocodeView

urlpatterns = [
    path('route/', RouteView.as_view()),
    path('geocode/', GeocodeView.as_view()),
]