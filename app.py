import os
import flask
from flask_socketio import SocketIO, emit
from flask import request
import requests
from datetime import datetime
import json
import time

# Set some basic app connections
app = flask.Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
print "\n  -->LCYC: Socket.IO inits finished..."

if os.getenv("CIRCLE_CI_TEST_ENV") != "TRUE":
    # import stuff that breaks CircleCI (db models?)
    print ("Test environment not found...")
    import models

socketio = SocketIO(app)
# Imports are finished
print "\n  -->LCYC: Imports finished..."

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

# Pairs container for connected users, storing their ID and SOCKET
connections = {}

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
    print("Incoming Connection -")
    print("Socket ID:")
    print(request.sid)
    emit("hello", {"message":"Hello from the PlantBot server!"})
    # Optionally, do stuff that breaks CircleCI
    if os.getenv("CIRCLE_CI_TEST_ENV") == "TRUE":
        print "CircleCI environment found, skipping incompatable code!"
    else:
        print ""
        # Do anything here that breaks CircleCI

# When a client disconnects, remove them from the authorized users dictionary
@socketio.on('disconnect')
def disconnect():
    print("Destroyed Connection -")
    print("Socket ID:")
    print(request.sid)
    try:
        if(connections[request.sid] is not None):
            print("Authorized user leaving:")
            print("User: " + connections[request.sid])
            connections.pop(request.sid, None)
        else:
            print("**This error should never execute**")
    except KeyError:
        print("User was not logged in.")
    

@socketio.on('user auth')
def user_test(data):
    print("User Authorization -")
    print(data)
    print("Socket ID:")
    print(request.sid)
    response = requests.get('https://graph.facebook.com/v2.8/me?fields=id%2Cname%2Cpicture&access_token=' + data['authToken'])
    oAuth = response.json()
    print("FB oAuth Response:")
    print(oAuth)
    if(oAuth['name'] is not None):
        connections[request.sid] = oAuth['id']
        print("Newly connected user is authorized!")
        # Send an auth confirmation back to client so application can load
        emit('oAuth', {'userImgURL':oAuth['picture']['data']['url'], 'userName':oAuth['name']})
        # Check if user already exists, create if not
        result = models.users.query.filter_by(fbid=oAuth['id']).first()
        if(result is None):
            user = models.users(data['authToken'])
            user.username = oAuth['name']
            user.fbid = oAuth['id']
            models.db.session.add(user)
            models.db.session.commit()
            print("New user created:")
            print user
        else:
            print("User already exists:")
            print result
    else:
        print("Illegal FB Auth sequence!")
        print(data)
        # EMIT ERROR TO JS FOR RELOAD TO LOGIN SCREEN
        
@socketio.on('post')
def post(data):
    print("Post Received -")
    print(data)
    response = requests.get('https://graph.facebook.com/v2.8/me?fields=id%2Cname%2Cpicture&access_token=' + data['authToken'])
    oAuth = response.json()
    user = models.users.query.filter_by(fbid=oAuth['id']).first()
    if(user is None):
        print("Error: User does not exist in Facebook's API.")
        # EMIT ERROR TO JS FOR RELOAD TO LOGIN SCREEN
    else:
        print("User is authorized to perform post functions...")
        try:
            if(connections[request.sid] is not None):
                print("Authorized user posting:")
                print("User: " + connections[request.sid])
                plant = models.plants(data['img'], user.fbid, data['plantname'], data['location'], datetime.now())
                models.db.session.add(plant)
                models.db.session.commit()
            else:
                print("**This error should never execute**")
        except KeyError:
            print("User was not logged in.")
    
@socketio.on('search')
def search(data):
    print("Search Received -")
    print(data)
    response = requests.get('https://graph.facebook.com/v2.8/me?fields=id%2Cname%2Cpicture&access_token=' + data['authToken'])
    oAuth = response.json()
    user = models.users.query.filter_by(fbid=oAuth['id']).first()
    if(user is None):
        print("Error: User does not exist in Facebook's API.")
        # EMIT ERROR TO JS FOR RELOAD TO LOGIN SCREEN
    else:
        print("User is authorized to perform search functions...")
        try:
            if(connections[request.sid] is not None):
                print("Authorized user searching:")
                print("User: " + connections[request.sid])
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
                returnData = {}
                counter = 0
                for row in rows:
                    #need to update user by doing a joined search... will do in future
                    returnData[counter] = {"name": row.name, "date": str(row.date), "id": row.id, "user": row.userid, "URI": row.img}
                    counter = counter +1
                print("Search results being sent...")
                emit("results", returnData)
                print(len(returnData) + " results sent.")
            else:
                print("**This error should never execute**")
        except KeyError:
            print("User was not logged in.")

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
