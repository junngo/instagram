# Generated by Django 2.0.2 on 2018-03-31 06:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_auto_20180329_2148'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('male', 'Male'), ('not-specified', 'Not specified'), ('female', 'Female')], max_length=80, null=True),
        ),
    ]
