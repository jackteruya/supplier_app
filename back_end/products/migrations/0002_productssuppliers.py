# Generated by Django 4.1 on 2023-09-26 18:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('suppliers', '0003_alter_addresssuppliers_supplier_and_more'),
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductsSuppliers',
            fields=[
                ('base_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='products.base')),
                ('unit_cost', models.DecimalField(decimal_places=5, max_digits=11, verbose_name='Custo Unitario')),
                ('total_cost', models.DecimalField(decimal_places=5, max_digits=11, verbose_name='Custo Total')),
                ('unit_measure', models.CharField(max_length=5, verbose_name='Unidade de Medida')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='products.products')),
                ('supplier', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='supplier', to='suppliers.suppliers')),
            ],
            bases=('products.base',),
        ),
    ]