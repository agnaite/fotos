from flask import request, render_template, jsonify, url_for, redirect, g
from flask_cors import CORS, cross_origin
from models import Album

from index import app, db
CORS(app)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/<path:path>', methods=['GET'])
def any_root_path(path):
    return render_template('index.html')

@app.route('/get-albums', methods=['GET'])
def get_albums():

    albums = Album.query.all()
    print albums
    return jsonify({album.album_id: album.name for album in albums})

@app.route("/create-album", methods=["POST", "GET"])
def create_album():

    name = request.form.get('name')
    description = request.form.get('description')

    album = Album(name=name, description=description, created_at=Album.set_time())
    db.session.add(album)
    db.session.commit()

    return jsonify({'id': album.album_id})

