from django.db import models

from .base import Base


class Products(Base):
    name = models.CharField('Nome', max_length=200, unique=True)
    description = models.TextField('Descrição', blank=True, null=True)
    category = models.ForeignKey('products.Categories', related_name='category', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id} - {self.name}'
