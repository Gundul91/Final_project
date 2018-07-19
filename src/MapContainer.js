import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
      <div className="MapContainer">
        <Map google={this.props.google} initialCenter={{
              lat: 44.500882,
              lng: 7.584494
            }} zoom={14}>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ( "AIzaSyCjGfazU6dDNEmytBQ1oEe3p71QFpHFLiA" )
})(MapContainer)
