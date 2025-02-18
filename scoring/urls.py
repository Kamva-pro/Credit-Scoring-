from django.urls import path
from .views import submit_business, get_scores

urlpatterns = [
    path('submit/', submit_business, name='submit_business'),
    path('scores/', get_scores, name='get_scores'),
]
