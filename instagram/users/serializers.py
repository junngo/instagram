from rest_framework import serializers
from . import models
from instagram.images import serializers as image_serializers

class UserProfileSerializer(serializers.ModelSerializer):

    images = image_serializers.CountImageSerializer(many=True)

    class Meta:
        model = models.User
        fields = (
            'username',
            'name',
            'bio',
            'website',
            'post_count',
            'followers_count',
            'following_count',
            'images' # If image serializer is not, just you can see image id
        )

class ListUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = (
            'id',
            'profile_image',
            'username',
            'name'
        )
