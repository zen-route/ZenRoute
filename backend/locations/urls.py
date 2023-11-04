from django.urls import path
from .views import RouteView, GeocodeView, SaveTripView

urlpatterns = [
    path('route/', RouteView.as_view()),
    path('geocode/', GeocodeView.as_view()),
    path('save/', SaveTripView.as_view()),
]