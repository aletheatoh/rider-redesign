import React, { Component } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import NearestStopList from './components/NearestStopList.jsx'
import StopPin from './components/StopPin.jsx'
import TranslocAgency from './transloc.js'
import { stops } from './stops.js'
import LocationPin from './components/LocationPin.jsx'
import StopTimeArrivals from './components/StopTimeArrivals.jsx'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {agency: new TranslocAgency(176), mode: 'list'}
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
  }

  locationSuccess = (l) => {
    this.setState({currentLocation: [l.coords.latitude, l.coords.longitude]})
  }

  locationError = (l) => {
    console.log(l)
  }

  setMode = (mode, stop) => {
    this.setState({mode: mode, selected: stop || this.state.selected})
  }

  changeSelected = (stop) => {
    this.setState({selected: stop})
  }

  getRenderStops = () => {
    return this.getStops().map((s) => {
      return <StopPin
        stop={s}
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
        <div className="mapContainer">
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

        {this.state.currentLocation && this.state.mode === 'list' ?
          <NearestStopList
            setMode={this.setMode}
            selected={this.state.selected || stops[0]}
            stops={stops}
            lat={this.state.currentLocation[0]}
            lng={this.state.currentLocation[1]}
            agency={this.state.agency}
          /> : null
        }
        {this.state.currentLocation && this.state.mode === 'stop' ?
          <StopTimeArrivals
            setMode={this.setMode}
            selected={this.state.selected}
            agency={this.state.agency}
          /> : null
        }
      </div>
    );
  }
}

export default App;
