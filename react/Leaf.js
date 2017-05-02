import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Icon } from 'react-leaflet'

export class Leaf extends Component {
  constructor(props) {
    super(props);
    
    var temp = [];
    var counter = 0;
    var icon = window.L.icon({iconUrl: "https://cdn4.iconfinder.com/data/icons/natural-green-perfect-pixel-2/512/Leaves_leaf_autumn_natural-128.png",
                              iconAnchor:   [24, 28],
                              iconSize:     [32, 32]
    })
    for( var i in props.posts){
      console.log("maps");
      // console.log(props.latlons[i]);
        temp.push( (<Marker key ={counter} position={props.posts[i].latlon} 
        icon = {icon}>
          <Popup>
            <span>Marina. <br /> California.</span>
          </Popup>
        </Marker>));
        counter = counter + 1;
    }
    //36.6844° N, 121.8022° W = marina, Ca
    this.state = {
      latlons:props.latlons,
       results: temp,
      center: props.center,
      zoom: 12 //need to write a function to solve for this
      
    };

  }


  render () {
    return (
      <Map center={this.props.posts[0].center} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {this.state.results}
      </Map>
    )
  }
}



