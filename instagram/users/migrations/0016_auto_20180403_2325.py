# Generated by Django 2.0.2 on 2018-04-03 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0015_auto_20180401_2152'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('not-specified', 'Not specified'), ('female', 'Female'), ('male', 'Male')], max_length=80, null=True),
        ),
    ]
