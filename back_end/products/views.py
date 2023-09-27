from rest_framework import viewsets

from products.models import Products, Categories, ProductsSuppliers
from products.serializers import ProductsSerializer, CategoriesSerializer, ProductsSuppliersSerializer


class ProductsViewSets(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer


class CategoriesViewSets(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer


class ProductsSuppliersViewSets(viewsets.ModelViewSet):
    queryset = ProductsSuppliers.objects.all()
    serializer_class = ProductsSuppliersSerializer
