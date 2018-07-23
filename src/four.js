import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

var foursquare = require('react-foursquare')({
  clientID: 'LC0GY54VBUJOVC5RURAESLSK1TK3YPNGYXGVK3BWDGGTAHEX',
  clientSecret: 'JFZ3ZCNVU4RDDH1PUV3KHKS5PLLJSQ5RVPQZ4AJNLMZAB1MV'
});

var params = {
  "ll": "41.901083, 12.479116",
  "query": 'parthenon'
};

export default class FoursquareDemo extends Component {

  constructor(props) {
     super(props);
     this.state = {
       items: []
     };
   }

  componentDidMount() {
    foursquare.venues.getVenues(params)
      .then(res=> {
        console.log(res.response.venues)
        this.setState({ items: res.response.venues });
      });
  }

  render() {
    return (
    <div>
      <div>Foursquare ⇩</div>
      <div>Items:</div>
      { this.state.items.map(item=> { return <div key={item.id}>{item.name}</div>}) }
    </div>
  )
  }
}
