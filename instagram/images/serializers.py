from rest_framework import serializers
from . import models
from instagram.users import models as user_models


class FeedUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = user_models.User
        fields = (
            'username',
            'profile_image'
        )


class CommentSerializer(serializers.ModelSerializer):

    creator = FeedUserSerializer(read_only=True)

    class Meta:
        model = models.Comment
        #fields = '__all__'
        fields = (
            'id',
            'message',
            'creator',
            'image'
        )


class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Like
        fields = '__all__'


class ImageSerializer(serializers.ModelSerializer):

    # default name
    # comment_set = CommentSerializer(many=True)
    # like_set = LikeSerializer(many=True)

    comments = CommentSerializer(many=True)
    #likes = LikeSerializer(many=True) -> to use like_count
    creator = FeedUserSerializer()


    class Meta:
        model = models.Image
        #fields = '__all__'
        fields = (
            'id',
            'file',
            'location',
            'caption',
            'comments',
            'like_count',
            'creator'
        )