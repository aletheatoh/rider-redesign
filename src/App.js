import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';
import NearestStopList from './components/NearestStopList.jsx'
import StopPin from './components/StopPin.jsx'
import TranslocAgency from './transloc.js'
import { stops } from './stops.js'
import {geolocated} from 'react-geolocated';
import LocationPin from './components/LocationPin.jsx'
class App extends Component {

  // state = {}

  constructor(props) {
    super(props)
    this.state = {agency: new TranslocAgency(176)}
    console.log(navigator.geolocation)
    this.watch = navigator.geolocation.watchPosition(this.locationSuccess, this.locationError)
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
    return stops
    // let stops =  this.state.agency.getStops()
    // console.log(stops)
    // stops = stops['stops'].map((s) => {return {name: s.name, lat: s.position[0], lng: s.position[1]};})
    // return ['West Campus Chapel']
  }

  locationSuccess = (l) => {
    console.log('succ', l)
    this.setState({currentLocation: [l.coords.latitude, l.coords.longitude]})
  }

  locationError = (l) => {
    console.log(l)
  }

  changeSelected = (id) => {
    this.setState({selected: id})
  }

  getRenderStops = () => {
    return this.getStops().map((s) => {
      return <StopPin
        selected={s.id === this.state.selected}
        lat={s.lat}
        lng={s.lng}
        text={s.name || ''}
        changeSelected={this.changeSelected}
        code = {s.code}
        id = {s.id}
        key={s.id+s.code}
      />})
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
          {this.getRenderStops()}
          {this.state.currentLocation ?
            <LocationPin
              lat={this.state.currentLocation[0]}
              lng={this.state.currentLocation[1]}
            /> : null}
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
