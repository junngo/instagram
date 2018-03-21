from django.conf.urls import url
from . import views

app_name = "images"

urlpatterns = [
    url(
        regex = r'^$',
        view = views.Feed.as_view(),
        name = 'feed'
    )
]
