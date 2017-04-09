import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';


// Init the SocketIO layer
import * as SocketIO from 'socket.io-client';
var Socket = SocketIO.connect();

// Handle FB login dispatching
FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
        console.log("Logged in.");
    }
    else {
        console.log("Not logged in.");
    }
});

// Function to dispatch new message when "Send" is clicked in React
var clicker = function(data){
    console.log("clicker clicked, data:");
    console.log(data);
};

// Render the React components - call after state change
var rend = function(){
   // Output React Application with current state
    ReactDOM.render(<App clicker={clicker}/>, document.getElementById('app')); 
};

rend();

// When the user connects to the server, let the console know
Socket.on('connect', function(){
    console.log("Client Connected!");
});

// When the user gets a hello message, print it to console
Socket.on('hello', function(data){
    console.log(data["message"]);
});
Socket.on
