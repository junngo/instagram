# Generated by Django 2.0.2 on 2018-03-21 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_auto_20180321_2300'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profile_image',
            field=models.ImageField(null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('not-specified', 'Not specified'), ('male', 'Male'), ('female', 'Female')], max_length=80, null=True),
        ),
    ]