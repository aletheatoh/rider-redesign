import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';
import NearestStopList from './components/NearestStopList.jsx'
import StopPin from './components/StopPin.jsx'
import TranslocAgency from './transloc.js'
import { stops } from './stops.js'

class App extends Component {

  // state = {}

  constructor(props) {
    super(props)
    this.state = {agency: new TranslocAgency(176)}
  }

  static defaultProps = {
    center: {
      lat: 36.000930,
      lng: -78.938182,
    },
    zoom: 16
  };

  componentDidMount = () => {
    this.setState({});
  }

  getStops = () => {
    console.log(stops)
    return stops
    // let stops = await this.state.agency.getStops()
    // console.log(stops)
    // stops = stops['stops'].map((s) => {return {name: s.name, lat: s.position[0], lng: s.position[1]};})
    // return ['West Campus Chapel']
  }

  render() {
    return (
      <div className="App">

        <div className="spacing">
          <button key="routes" className="left buttonOverlay">Routes</button>
          <button key="stops" className="right buttonOverlay">Stops</button>
        </div>
        <div className="mapContainer" style={{height: '70vh', width:'100%'}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyC8t1j-A-oRUV-8CwD32ULymygur5kjblY' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          {this.getStops().map((s) => <StopPin key={s.name} lat={s.lat} lng={s.lng} text={s.name}/>)}
        </GoogleMapReact>
      </div>
      </div>
    );
  }
}

// <NearestStopList stops={this.getStops()}/>


// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
//
export default App;
