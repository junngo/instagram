# Generated by Django 2.0.2 on 2018-04-01 03:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_auto_20180331_1556'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('not-specified', 'Not specified'), ('male', 'Male'), ('female', 'Female')], max_length=80, null=True),
        ),
    ]
