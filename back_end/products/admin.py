from django.contrib import admin

from products.models import Categories, Products, ProductsSuppliers


@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    fields = ['id', 'name']
