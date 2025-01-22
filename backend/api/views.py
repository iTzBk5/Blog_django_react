from django.shortcuts import render

# backend/api/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_routes(request):
    routes = ['GET /api/']
    return Response(routes)


from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category
from .serializers import CategorySerializer

class CategoryListView(APIView):
    def get(self, request):
        categories = Category.objects.prefetch_related('subcategories').all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
