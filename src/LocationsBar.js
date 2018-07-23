import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

var locations = [
  {title: 'Piazza Venezia', location: {lat: 41.896290, lng: 12.482618}, id: 'ChIJJfPPGE1gLxMRBgH6_EY2DYM'},
  {title: 'Foro di Traiano', location: {lat: 41.895179, lng: 12.485337}, id: 'ChIJt3-uM7NhLxMR5sTTw8VSmc0'},
  {title: 'Piazza del Campidoglio', location: {lat: 41.893201, lng: 12.482733}, id: 'ChIJSWpZoExgLxMRNTRqG_rQUgs'},
  {title: 'Foro Romano', location: {lat: 41.891704, lng: 12.484361}, id: 'ChIJLV2ytrRhLxMR0g-fQn48DoI'},
  {title: 'Colosseo', location: {lat: 41.890210, lng: 12.492231}, id: 'ChIJe9JHwrZhLxMRg8n__8hn8MI'}
]

class LocationsBar extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    listOpen: false,
    show: locations
  };

  filter = ["Piazza", "Foro", "Colosseo"]

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  /*locationClick(ev, t){
    let tmp=[]
    tmp.push(locations.find(location => location.id === ev.target.getAttribute('data-key')))
    t.setState({show: tmp})
  }*/

  locclick(ev, t) {
    let boo = document.querySelectorAll('.gmnoprint')
    console.log(boo[1].props)
    document.querySelectorAll('.gmnoprint')[ev.target.getAttribute('num')].click();
  }

  render() {
    const list = locations
    const{listOpen, headerTitle} = this.state
    return(
      <div className="LocationsBar">
        <h2>Locations</h2>
        <div className="filter dd-wrapper">
          <div className="dd-header" onClick={() => this.toggleList()}>
              <div className="dd-header-title">{headerTitle}</div>
              {listOpen
                ? <span>Filter ⇧</span>
                : <span>Filter ⇩</span>
              }
          </div>
          {listOpen && <ul className="dd-list">
            {this.filter.map((item) => (
              <li className="dd-list-item" key={"filter" + item.id} >{item}</li>
            ))}
          </ul>}
        </div>
        <ul className="LocationsList">
        {this.state.show.map((item, index) => (
          <li className="location" num={index} key={item.id} data-key={item.id} onClick={(ev) => this.locclick(ev, this)}>{item.title}</li>
        ))}
        </ul>
      </div>
    )
  }
}

export default LocationsBar
