from django.urls import path
from .views import ContactCreateView, contact_list

urlpatterns = [
    path('contact/', ContactCreateView.as_view(), name='contact_create'),
    path('contacts/', contact_list, name='contact_list'),
]
