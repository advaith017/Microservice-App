from django.db import models
import datetime
# Create your models here.

class Turfs(models.Model):

    title = models.CharField(max_length=200)
    date = models.DateField(default=datetime.date(2023,8,30))
    time= models.CharField(max_length=200,default = datetime.time(6,0))
    booked = models.IntegerField(default=0)
   
class User(models.Model):
    pass