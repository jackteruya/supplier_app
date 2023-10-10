from rest_framework import viewsets

from products.models import Products, Categories, ProductsSuppliers
from products.serializers import ProductsSerializer, CategoriesSerializer, ProductsSuppliersSerializer, ProductsGETSerializer


class ProductsViewSets(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

    def get_serializer_class(self):
        if self.action in ['list', 'retrieve']:
            self.serializer_class = ProductsGETSerializer
        return super(ProductsViewSets, self).get_serializer_class()


class CategoriesViewSets(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer


class ProductsSuppliersViewSets(viewsets.ModelViewSet):
    queryset = ProductsSuppliers.objects.all()
    serializer_class = ProductsSuppliersSerializer
