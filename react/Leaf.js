import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export class Leaf extends Component {
  constructor() {
    super();
    //36.6844° N, 121.8022° W = marina, Ca
    this.state = {
      lat: 36.6844,
      lng: -121.8022,
      zoom: 12,
      lat1: 36.68,
      lng1: -121.80,
      zoom1: 12, 
      pos: []
    };
    
  }
  AfuncitonName(e) {
    // 	e.setLatLng(e.latlng)
    //     popup
    //       .setLatLng(e.latlng)
    //       .setContent("You clicked the map at " + e.latlng.toString())
    //       .openOn(mymap);
    //       console.log(this.state.pos);
    console.log(e.latlng['lat']);
    this.setState({pos: e.latlng});
  }
  render () {
    const latlng = this.state.pos;
    const position = [this.state.lat, this.state.lng];
    const pos = [this.state.lat1, this.state.lng1];
    return (
      /*
                	function onMapClick(e) {
          		popup
          			.setLatLng(e.latlng)
          			.setContent("You clicked the map at " + e.latlng.toString())
          			.openOn(mymap);
	}
      */
      <Map center={position} zoom={this.state.zoom} onClick={this.AfuncitonName}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />

        <Marker position={position} icon = {window.L.icon({iconUrl: "https://cdn.kastatic.org/images/avatars/leaf-blue.png",
                      iconSize: [40, 40],
                      iconAnchor: [20, 20]
                      })}>
          <Popup>
            <span>Marina. <br /> California.</span>
          </Popup>
        </Marker>
        
        <Popup position = {latlng}>
          <span>{latlng}</span>
        </Popup>
        
        <Marker position={pos} icon = {window.L.icon({iconUrl: "https://cdn.kastatic.org/images/avatars/leaf-blue.png",
                      iconSize: [40, 40],
                      iconAnchor: [20, 20]
                      })}>
          <popup>
           <span>Hello </span>
           </popup>
        </Marker>
      </Map>
    )
  }
}