from django.db import models

from .base import Base


class ProductsSuppliers(Base):
    amount = models.DecimalField('Valor', max_digits=11, decimal_places=5)
    product = models.ForeignKey('products.Products', related_name='products', on_delete=models.CASCADE)
    supplier = models.ForeignKey('suppliers.Suppliers', related_name='supplier', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id} - {self.product} - {self.supplier}'
