from index import db
from datetime import datetime
from sqlalchemy.sql import func

class Album(db.Model):
    """A Photo Album"""

    __tablename__ = 'albums'

    album_id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(255), unique=True)
    description = db.Column(db.String(255))
    key_photo_id = db.Column(db.Integer(), db.ForeignKey('photos.photo_id'))
    created_at = db.Column(db.DateTime(timezone=True))
    edited_at = db.Column(db.DateTime(timezone=True))

    photos = db.relationship("Photo", backref="album")

    @classmethod
    def set_time(self):
        """Return current date time object."""

        return datetime.now()

class Photo(db.Model):
    """A single Photograph."""

    __tablename__ = 'photos'

    photo_id = db.Column(db.Integer, primary_key=True)
    photo_object = db.Column(db.LargeBinary())
    album_id = db.Column(db.Integer())


if __name__ == "__main__":

    db.drop_all()
    db.create_all()