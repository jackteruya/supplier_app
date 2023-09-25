from rest_framework import serializers

from products.models import Categories, Products, ProductsSuppliers


class CategoriesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categories
        fields = ['id', 'name', ]
        read_only_fields = ['id', ]


class ProductsSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Categories.objects.all())

    class Meta:
        model = Products
        fields = ['id', 'name', 'description', 'category']
        read_only_fields = ['id', ]
