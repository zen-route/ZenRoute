# urls.py
from django.urls import path
from .views import UserRegistrationView, UserProfileView, UserLoginView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('login/', UserLoginView.as_view(), name='user-login'),
]
