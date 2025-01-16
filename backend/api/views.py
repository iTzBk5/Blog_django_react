from django.shortcuts import render

# backend/api/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_routes(request):
    routes = ['GET /api/']
    return Response(routes)
