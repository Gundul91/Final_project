import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import MapContainer from './MapContainer.js';
import FoursquareDemo from './four.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FoursquareDemo />
        <MapContainer />
      </div>
    );
  }
}

export default App
