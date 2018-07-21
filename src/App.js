import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import MapContainer from './MapContainer.js';
import FoursquareDemo from './four.js';
import LocationsBar from './LocationsBar.js';

class App extends Component {
  render() {
    return (
      <div>
        <LocationsBar />
        <MapContainer />
        <FoursquareDemo />
      </div>
    );
  }
}

export default App
