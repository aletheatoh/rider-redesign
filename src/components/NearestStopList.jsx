import React, { Component } from 'react';
import StopArrivalEstimate from './StopArrivalEstimate.jsx'
import './css/NearestStopList.css';
import geolib from 'geolib';

export default class NearestStopList extends Component {
  getNearestStops = (stops, lat, lng) => {
    let stopDistances = stops.map((s) =>
      {return {...s, dist: this.getDistanceToLocation(s)}}
    )
    return stopDistances.sort((s1, s2) => {return s1.dist - s2.dist}).slice(0,3)
  }

  getDistanceToLocation = (stop1) => {
    return Math.abs(
      geolib.getDistance(
        {latitude: this.props.lat, longitude: this.props.lng},
        {latitude: stop1.lat, longitude: stop1.lng}))
  }
  render() {
    return (
      <div className="NearestStopList container">
        <table className="table">
          {this.getNearestStops(this.props.stops, this.props.lat, this.props.lng).map(
            s => <StopArrivalEstimate key={s.id} stop={s} dist={s.dist}/>
          )}
        </table>
      </div>
    );
  }

}
