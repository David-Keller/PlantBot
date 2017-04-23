import os
import flask
from flask_socketio import SocketIO
from flask import request
import requests
from datetime import datetime

import flask_sqlalchemy
from sqlalchemy import func
if os.getenv("CIRCLE_CI_TEST_ENV") != "TRUE":
    # import stuff that breaks CircleCI (db models?)
    print (os.getenv("CIRCLE_CI_TEST_ENV"))
    import models
import json
import time

# Imports are finished
print "\n  -->LCYC: Imports finished..."

# Set some basic app connections
app = flask.Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)
print "\n  -->LCYC: Socket.IO inits finished..."

# Set server state to "COLD"
serverIsReady = False

# Turn server from "COLD" to "HOT" with DB dump to message history object
def startService():
    if os.getenv("CIRCLE_CI_TEST_ENV") != "TRUE": 
        # Do stuff that breaks CircleCI but you need to run IRL
        print "CircleCI environment not found!"
    # Set server as "HOT"
    global serverIsReady
    serverIsReady = True

# Serve the index page to the chat app - but turn server "HOT" first if needed
@app.route('/')
def index():
    if not serverIsReady:
        startService()
    print "\n  -->ACTN: Served \"index.html\" to HTTP request..."
    return flask.render_template('index.html')

# When a new client connects - inform the console and say hi to the new client
@socketio.on('connect')
def connect():
    print "\n  -->SCKT: User connected to Socket.IO manager..."
    socketio.emit("hello", {"message":"Hello from the Python server!"})
    request
    # Optionally, do stuff that breaks CircleCI
    if os.getenv("CIRCLE_CI_TEST_ENV") != "TRUE":
        print "CircleCI environment not found!"

@socketio.on('user test')
def user_test(data):
    print("recived fb info")
    response = requests.get('https://graph.facebook.com/v2.8/me?fields=id%2Cname%2Cpicture&access_token=' + data['facebook_user_token'])
    json = response.json()
    #check if user already exists
    result = models.db.engine.execute("select fbid as fbid from users where fbid='%s'" % json['id'])
    rows = result.fetchall()
    print rows
    if(len(rows) == 0):
        user = models.users(data['facebook_user_token'])
        user.username = json['name']
        user.fbid = json['id']
        models.db.session.add(user)
        models.db.session.commit()
    else:
        print("user already exists")
        

@socketio.on('post')
def post(data):
    print("post recieved")
    response = requests.get('https://graph.facebook.com/v2.8/me?fields=id%2Cname%2Cpicture&access_token=' + data['facebook_user_token'])
    json = response.json()
    result = models.db.engine.execute("select fbid from users where fbid='%s'" % json['id'])
    rows = result.fetchall()
    
    if(len(rows) == 0): #check if user exists
        print("error user doesnt exist")
    else:
        plant = models.plants(data['img'], rows[0][0], data['plantname'], data['location'], datetime.now())
        models.db.session.add(plant)
        models.db.session.commit()
    
@socketio.on('Search')
def search(data):
    print("search recieved")
    response = requests.get('https://graph.facebook.com/v2.8/me?fields=id%2Cname%2Cpicture&access_token=' + data['facebook_user_token'])
    json = response.json()
    result = models.db.engine.execute("select fbid from users where fbid='%s'" % json['id'])
    rows = result.fetchall()
    
    #if(len(rows) == 0): #check if user exists
    if(0): #check if user exists
        print("error user doesnt exist")
    else:
        requestlist = models.plants.query
        filterlist = ['name']
        for f in filterlist:
            if((data[f] != "no filter") | (data[f] != "")): #keeping options open
                requestlist = requestlist.filter( getattr(models.plants, f).ilike(data[f]))
        if(data['location'] != ""):
            lat = data['location'].split(" ", 3)[0]
            lon = data['location'].split(" ", 3)[1]
            requestlist = requestlist.filter(models.plants.distance(lat, lon) < data['distance'])
        rows = requestlist.all()
        data = {}
        counter = 0
        for row in rows:
            #need to update user by doing a joined search... will do in future
            data[counter] = {"name": row.name, "date": str(row.date), "id": row.id, "user": row.userid}
            counter = counter +1
        socketio.emit("results", data, room = request.sid)

@socketio.on('img request')
def imgRequest(data):
    print("request recieved")
    response = requests.get('https://graph.facebook.com/v2.8/me?fields=id%2Cname%2Cpicture&access_token=' + data['facebook_user_token'])
    json = response.json()
    result = models.db.engine.execute("select fbid from users where fbid='%s'" % json['id'])
    rows = result.fetchall()
    
    #if(len(rows) == 0): #check if user exists
    if(0): #check if user exists
        print("error user doesnt exist")
    else:
        imgrequest = models.plants.query.filter(models.plants.id == data['id'])
        img = imgrequest.all()[0]
        socketio.emit(data['id'], {"img":img.img}, room = request.sid)
        print "image sent to: " + str(data['id'])
    
    
    
 
# Run the application
if __name__ == '__main__':
    print "\n\n  ----- APPLICATION RUNNING -----\n"
    print "\n  -->SCKT: Socket.IO manager initializing into application..."
    socketio.run(
        app,
        host=os.getenv('IP', '0.0.0.0'),
        port=int(os.getenv('PORT', 8080)),
        debug=False
    )
