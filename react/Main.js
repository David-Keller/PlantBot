import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';


// Init the SocketIO layer
import * as SocketIO from 'socket.io-client';
var Socket = SocketIO.connect();

// Handle FB login dispatching
/*global FB*/
var route = "login";
window.fbAsyncInit = function() {
    FB.init({
      appId      : '1415349178527947',
      xfbml      : true,
      status     : true,
      oauth      : true,
      version    : 'v2.8'
    });
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            console.log("Logged in.");
            route = "app";
        }
        else {
            console.log("Not logged in.");
            route = "login";
        }
        rend();
    });

};
            
(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



// Function to dispatch new message when "Send" is clicked in React
var clicker = function(data){
    console.log("clicker clicked, data:");
    console.log(data);
    if(route == "login"){
        FB.login();
    }
    else{
        FB.logout();
    }
};

// Render the React components - call after state change
var rend = function(){
   // Output React Application with current state
    ReactDOM.render(<App clicker={clicker} route={route}/>, document.getElementById('app')); 
};

// When the user connects to the server, let the console know
Socket.on('connect', function(){
    console.log("Client Connected!");
});

// When the user gets a hello message, print it to console
Socket.on('hello', function(data){
    console.log(data["message"]);
});