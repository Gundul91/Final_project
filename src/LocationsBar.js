import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

var locations = [
  {title: 'Piazza Venezia', location: {lat: 41.896290, lng: 12.482618}},
  {title: 'Foro di Traiano', location: {lat: 41.895179, lng: 12.485337}},
  {title: 'Piazza del Campidoglio', location: {lat: 41.893201, lng: 12.482733}},
  {title: 'Foro Romano', location: {lat: 41.891704, lng: 12.484361}},
  {title: 'Colosseo', location: {lat: 41.890210, lng: 12.492231}}
]

class LocationsBar extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    listOpen: false
  };

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render() {
    const list = locations
    const{listOpen, headerTitle} = this.state
    return(
      <div className="dd-wrapper LocationsBar">
        <div className="dd-header" onClick={() => this.toggleList()}>
            <div className="dd-header-title">{headerTitle}</div>
            {listOpen
              ? <span>Filter ⇧</span>
              : <span>Filter ⇩</span>
            }
        </div>
        {listOpen && <ul className="dd-list">
          {list.map((item) => (
            <li className="dd-list-item" key={item.id} >{item.title}</li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default LocationsBar
