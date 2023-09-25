from rest_framework import viewsets

from suppliers.models import Suppliers
from suppliers.serializers import SuppliersSerializer


class SupplierViewSets(viewsets.ModelViewSet):
    queryset = Suppliers.objects.all()
    serializer_class = SuppliersSerializer
