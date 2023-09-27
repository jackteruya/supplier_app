from rest_framework import serializers

from products.models import Categories, Products, ProductsSuppliers
from suppliers.models import Suppliers


class CategoriesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categories
        fields = ['id', 'name', ]
        read_only_fields = ['id', ]


class ProductsSerializer(serializers.ModelSerializer):
    category = CategoriesSerializer()

    class Meta:
        model = Products
        fields = ['id', 'name', 'description', 'category']
        read_only_fields = ['id', ]


class ProductsSuppliersSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(queryset=Products.objects.all())
    supplier = serializers.PrimaryKeyRelatedField(queryset=Suppliers.objects.all())

    class Meta:
        model = ProductsSuppliers
        fields = ['id', 'amount', 'product', 'supplier']
        read_only_fields = ['id', ]
