from django.contrib import admin

from suppliers.models import Suppliers, AddressSuppliers, TelephoneSuppliers


class AddressSuppliersInline(admin.StackedInline):
    model = AddressSuppliers


class TelephoneSuppliersInline(admin.StackedInline):
    model = TelephoneSuppliers


@admin.register(Suppliers)
class SuppliersAdmin(admin.ModelAdmin):
    inlines = [
        AddressSuppliersInline,
        TelephoneSuppliersInline
    ]
