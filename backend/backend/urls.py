
from django.contrib import admin
from django.urls import path,re_path
from api import views
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.get_routes, name='home'),
    path('api/', views.get_routes),

    re_path(r'^.*$', TemplateView.as_view(template_name="index.html")),
]
