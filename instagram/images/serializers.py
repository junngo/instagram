from rest_framework import serializers

class ImageSerializer(serializers.Serializer):

    class Meta:
        model = models.Image
        fields = '__all__'

class CommentSerializer(serializers.Serializer):

    class Meta:
        model = models.Comment
        fields = '__all__'

class LikeSerializer(serializers.Serializer):

    class Meta:
        models = models.Like
        fields = '__all__'
