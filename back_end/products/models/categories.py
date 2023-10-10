from django.db import models

from .base import Base


class Categories(Base):
    name = models.CharField('Nome Produto', max_length=200, unique=True)

    def __str__(self):
        return f'{self.id} - {self.name}'
