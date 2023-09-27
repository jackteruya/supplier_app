from django.db import models


class Suppliers(models.Model):
    fantasy_name = models.CharField('Nome Fantasia', max_length=128)
    corporate_reason = models.CharField('Razao Social', max_length=128)
    cnpj = models.CharField('CNPJ', max_length=128)

    def __str__(self):
        return f'{self.id} - {self.fantasy_name}'


class TelephoneSuppliers(models.Model):
    ddd = models.CharField(max_length=3)
    number = models.CharField(max_length=10)
    is_main = models.BooleanField(default=True)
    supplier = models.ForeignKey(Suppliers, related_name='telephone', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id} - ({self.ddd}) {self.number}'


class AddressSuppliers(models.Model):
    street_address = models.CharField(max_length=64)
    neighborhood = models.CharField(max_length=64)
    number = models.CharField(max_length=64)
    complement = models.CharField(max_length=64)
    zip_code = models.CharField(max_length=64)
    city = models.CharField(max_length=64)
    state = models.CharField(max_length=64)
    is_main = models.BooleanField(default=True)
    supplier = models.ForeignKey(Suppliers, related_name='address', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id} - {self.street_address}'
