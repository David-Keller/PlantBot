import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export class Leaf extends Component {
  constructor(props) {
    super(props);
    //36.6844° N, 121.8022° W = marina, Ca
    this.state = {
      latlons:props.latlons,
      results: []
      
    };
  }
  componentDidMount(){
    var scope = this;
    var temp = [];
    for( var i in scope.latlons){
        temp.push( (<Marker position = {i} />));
    }
    scope.setState({results: temp});
  }

  render () {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>Marina. <br /> California.</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}