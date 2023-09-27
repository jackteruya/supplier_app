from django.db import models


class Base(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class Categories(Base):
    name = models.CharField('Nome Produto', max_length=200, unique=True)

    def __str__(self):
        return f'{self.id} - {self.name}'


class Products(Base):
    name = models.CharField('Nome', max_length=200, unique=True)
    description = models.TextField('Descrição', blank=True, null=True)
    category = models.ForeignKey(Categories, related_name='category', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id} - {self.name}'


class ProductsSuppliers(Base):
    amount = models.DecimalField('Valor', max_digits=11, decimal_places=5)
    product = models.ForeignKey(Products, related_name='products', on_delete=models.CASCADE)
    supplier = models.ForeignKey('suppliers.Suppliers', related_name='supplier', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id} - {self.product} - {self.supplier}'
