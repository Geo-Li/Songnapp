from django.db import models

# Create your models here.
class Album(models.Model):
    title = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    release_date = models.DateField()
    
    def __str__(self):
        return "album information:"\
            + "\ntitle: " + self.title\
            + "\nartist: " + self.artist\
            + "\nreleased date: " + self.title\


class Song(models.Model):
    title = models.CharField(max_length=100)
    album = models.ForeignKey(Album, related_name="songs", on_delete=models.CASCADE)

    def __str__(self):
        return "song information:"\
            + "\ntitle: " + self.title\
            + "\nalbum: " + str(self.album)
            
            
class Review(models.Model):
    song = models.ForeignKey(Song, related_name="reviews", on_delete=models.CASCADE)
    content = models.CharField(max_length=1000)

    def __str__(self):
        return "review information:"\
            + "\nsong: " + str(self.song)\
            + "\nreview: " + self.content
    