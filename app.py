import os
import flask
from flask_socketio import SocketIO
import requests
if os.getenv("CIRCLE_CI_TEST_ENV") != "TRUE":
    # import stuff that breaks CircleCI (db models?)
    print (os.getenv("CIRCLE_CI_TEST_ENV"))
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
    # Optionally, do stuff that breaks CircleCI
    if os.getenv("CIRCLE_CI_TEST_ENV") != "TRUE":
        print "CircleCI environment not found!"
 
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
