from rest_framework import serializers
from . import models


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Comment
        fields = '__all__'

class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Like
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):

    # default name
    # comment_set = CommentSerializer(many=True)
    # like_set = LikeSerializer(many=True)

    comments = CommentSerializer(many=True)
    likes = LikeSerializer(many=True)

    class Meta:
        model = models.Image
        #fields = '__all__'
        fields = (
            'id',
            'file',
            'location',
            'caption',
            'comments',
            'likes'
        )
