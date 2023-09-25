from django.db import models


class Base(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class Categories(Base):
    name = models.CharField('Nome Produto', max_length=200, unique=True)


class Products(Base):
    name = models.CharField('Nome', max_length=200, unique=True)
    description = models.TextField('Descrição', blank=True, null=True)
    category = models.ForeignKey(Categories, related_name='category', on_delete=models.CASCADE)


class ProductsSuppliers(): ...
