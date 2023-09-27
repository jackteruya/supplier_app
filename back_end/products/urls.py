from django.urls import include, path

from simple_system.urls import router
from .views import CategoriesViewSets, ProductsViewSets, ProductsSuppliersViewSets


router.register(r'categories', CategoriesViewSets, 'categories')
router.register(r'products', ProductsViewSets, 'products')
router.register(r'products/supplier', ProductsSuppliersViewSets, 'products-supplier')

urlpatterns = [
    path('', include(router.urls)),
]