from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .products import products 
from .serializers import ProductSerializer

# Create your views here.

# api_view carry the list of methods that are allowed
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',

        '/api/products/upload',
        
        '/api/products/<id>/reviews/',
        
        '/api/products/top/',
        '/api/products/<id>/',
        
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',
    ]

    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    # when we work with models there will be an error Object of type Product is not JSON serializable
    # it will be solved by creating a serializers in serializers.py
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)
    