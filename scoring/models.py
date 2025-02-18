from django.db import models

class Business(models.Model):
    BUSINESS_TYPES = [
        ('spaza', 'Spaza Shop'),
        ('freelancer', 'Freelancer'),
        ('delivery', 'Delivery Service'),
        ('other', 'Other')
    ]
    
    PAYMENT_METHODS = [
        ('mobile_money', 'Mobile Money'),
        ('bank', 'Bank Deposits'),
        ('cash', 'Cash')
    ]

    business_type = models.CharField(max_length=20, choices=BUSINESS_TYPES)
    monthly_revenue = models.IntegerField()
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHODS)
    business_age = models.IntegerField()
    missed_payments = models.BooleanField(default=False)
    credit_score = models.IntegerField(default=0)  # Score calculated later

    def __str__(self):
        return f"{self.business_type} - Score: {self.credit_score}"
