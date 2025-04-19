from django.urls import path, include
from rest_framework import routers
from .views import ItemViewSet

router = routers.DefaultRouter()
router.register(r'items', ItemViewSet)  # Авто-генерация URL для ViewSet

urlpatterns = [
    path('', include(router.urls)),  # Все маршруты роутера
]
