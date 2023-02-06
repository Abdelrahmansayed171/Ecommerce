from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        # Fields that we need to render out from the model
        fields = '__all__'
    