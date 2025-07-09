from django.urls import path
from . import views

urlpatterns = [
    path('contact/', views.contact_create, name='contact_create'),
    path('contacts/', views.contact_list, name='contact_list'),
]