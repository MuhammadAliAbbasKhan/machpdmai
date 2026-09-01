from django.urls import path
from . import views

urlpatterns = [
    path('auth/register/', views.register_user, name='register_user'),
    path('auth/login/', views.login_user, name='login_user'),
    path('subscribe/', views.subscribe_plan, name='subscribe_plan'),
    path('paid-services/request/', views.submit_premium_request, name='submit_premium_request'),
    path('quiz/submit/', views.quiz_submit, name='quiz_submit'),
    path('contact/submit/', views.contact_submit, name='contact_submit'),
    path('newsletter/submit/', views.newsletter_submit, name='newsletter_submit'),
    path('admin/analytics/', views.admin_analytics, name='admin_analytics'),
]
