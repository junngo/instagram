from rest_framework.views import APIView
from rest_framework.response import Response
from . import models, serializers

class Feed(APIView):

    def get(self, request, format=None):

        user = request.user

        following_users = user.following.all()

        image_list = []

        for following_user in following_users:
            user_images = following_user.images.all()[:2]

            for image in user_images:
                image_list.append(image)

        sortred_list = sorted(image_list, key=lambda image: image.created_at, reverse=True)

        print(sortred_list)

        serializer = serializers.ImageSerializer(sortred_list, many=True)

        return Response(serializer.data)


class LikeImage(APIView):
    #If I have a variable named user_id on a URL, how can I use it?
    def get(self, request, image_id, format=None):

        user = request.user

        try:
            found_image = models.Image.objects.get(id=image_id)
        except models.Image.DoesNotExist:
            return Response(status=404)

        new_like = models.Like.objects.create(
            creator = user,
            image = found_image
        )

        new_like.save()

        return Response(status=200)
