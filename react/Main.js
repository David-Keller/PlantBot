import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';


// Init the SocketIO layer
import * as SocketIO from 'socket.io-client';
var Socket = SocketIO.connect();

// Function to dispatch new message when "Send" is clicked in React
var clicker = function(){
    console.log("clicker clicked!");
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