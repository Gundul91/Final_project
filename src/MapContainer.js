import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

var locations = [
  {title: 'Piazza Venezia', location: {lat: 41.896290, lng: 12.482618}},
  {title: 'Foro di Traiano', location: {lat: 41.895179, lng: 12.485337}},
  {title: 'Piazza del Campidoglio', location: {lat: 41.893201, lng: 12.482733}},
  {title: 'Foro Romano', location: {lat: 41.891704, lng: 12.484361}},
  {title: 'Colosseo', location: {lat: 41.890210, lng: 12.492231}}
]

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <div className="MapContainer">
        <Map google={this.props.google} onClick={this.onMapClicked} initialCenter={{
              lat: 41.898611,
              lng: 12.476873
            }} zoom={14}>

          {locations.map((location) => {
            return (<Marker onClick={this.onMarkerClick}
              title={location.title}
              name={location.title}
              position={location.location} />)
          })}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ( "AIzaSyCjGfazU6dDNEmytBQ1oEe3p71QFpHFLiA" )
})(MapContainer)
