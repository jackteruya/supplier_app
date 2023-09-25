from django.urls import include, path

from simple_system.urls import router
from .views import SupplierViewSets



router.register(r'suppliers', SupplierViewSets, 'suppliers')

urlpatterns = [
    path('suppliers', include(router.urls)),
]