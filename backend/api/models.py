from django.db import models
from django.utils import timezone

class UserAccount(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    company = models.CharField(max_length=200, blank=True, default='')
    is_paid = models.BooleanField(default=False)
    active_plan = models.CharField(max_length=100, default='Free Tier')
    paid_until = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def is_subscription_active(self):
        if not self.is_paid:
            return False
        if self.paid_until and self.paid_until < timezone.now():
            return False
        return True

    def __str__(self):
        return f"{self.username} ({self.email})"

class SubscriptionOrder(models.Model):
    plan_name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    email = models.EmailField()
    cardholder_name = models.CharField(max_length=150)
    stripe_payment_id = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.plan_name} - ${self.amount} ({self.email})"

class QuizSubmission(models.Model):
    email = models.EmailField()
    fleet_size = models.CharField(max_length=100, blank=True, default='')
    primary_asset_type = models.CharField(max_length=100, blank=True, default='')
    annual_downtime_hours = models.CharField(max_length=100, blank=True, default='')
    recommended_package = models.CharField(max_length=100, default='Professional Predictive AI')
    estimated_savings = models.CharField(max_length=100, default='$240,000 / year')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Quiz ({self.email}) - {self.recommended_package}"

class ContactInquiry(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    subject = models.CharField(max_length=200, blank=True, default='')
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Inquiry from {self.name} ({self.email})"

class NewsletterSubscriber(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
