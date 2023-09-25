# Generated by Django 4.1 on 2023-09-24 11:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('suppliers', '0002_remove_suppliers_address_remove_suppliers_telephone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addresssuppliers',
            name='supplier',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='address', to='suppliers.suppliers'),
        ),
        migrations.AlterField(
            model_name='telephonesuppliers',
            name='supplier',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='telephone', to='suppliers.suppliers'),
        ),
    ]