
from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.get_routes, name='home'),
    path('api/', views.get_routes),
]
