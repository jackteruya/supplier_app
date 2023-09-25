from django.urls import include, path

from simple_system.urls import router
from .views import CategoriesViewSets, ProductsViewSets


router.register(r'categories', CategoriesViewSets, 'categories')
router.register(r'products', ProductsViewSets, 'products')

urlpatterns = [
    path('', include(router.urls)),
]