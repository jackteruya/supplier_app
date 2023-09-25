from rest_framework import viewsets

from products.models import Products, Categories
from products.serializers import ProductsSerializer, CategoriesSerializer


class ProductsViewSets(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer


class CategoriesViewSets(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer
