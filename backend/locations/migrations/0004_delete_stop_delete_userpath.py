# Generated by Django 4.2.7 on 2023-11-04 21:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0003_userpath_alter_stop_name_delete_trip_stop_user_path'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Stop',
        ),
        migrations.DeleteModel(
            name='UserPath',
        ),
    ]
