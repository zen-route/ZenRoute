# Generated by Django 4.2.7 on 2023-11-04 21:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0002_stop_trip'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserPath',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('source_name', models.CharField(max_length=100)),
                ('source_lat', models.FloatField()),
                ('source_lon', models.FloatField()),
                ('destination_name', models.CharField(max_length=100)),
                ('destination_lat', models.FloatField()),
                ('destination_lon', models.FloatField()),
            ],
        ),
        migrations.AlterField(
            model_name='stop',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.DeleteModel(
            name='Trip',
        ),
        migrations.AddField(
            model_name='stop',
            name='user_path',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='locations.userpath'),
            preserve_default=False,
        ),
    ]
