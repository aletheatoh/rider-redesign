import React, { Component } from 'react';
import StopArrivalEstimate from './StopArrivalEstimate.jsx'
import './css/NearestStopList.css';
import geolib from 'geolib';

export default class NearestStopList extends Component {
  getNearestStops = (stops, lat, lng) => {
    let stopDistances = stops.map((s) =>
      {return {...s, dist: this.getDistanceToLocation(s)}}
    )
    return stopDistances.sort((s1, s2) => {return s1.dist - s2.dist}).slice(0, this.props.selected ? 2 : 3)
  }

  getDistanceToLocation = (stop1) => {
    return Math.abs(
      geolib.getDistance(
        {latitude: this.props.lat, longitude: this.props.lng},
        {latitude: stop1.lat, longitude: stop1.lng}))
  }
  render() {
    let s = this.props.selected
    return (
      <div className="NearestStopList container">
        <table className="table">
          <tbody>
            {s ?
              <StopArrivalEstimate setMode={this.props.setMode} selected={true} key={s.id} stop={s} dist={this.getDistanceToLocation(s)} agency={this.props.agency}/> : ''}
            {this.getNearestStops(this.props.stops, this.props.lat, this.props.lng).filter((a) => {return s && a.id !== s.id}).map(
              s => <StopArrivalEstimate setMode={this.props.setMode} selected={false} key={s.id} stop={s} dist={s.dist} agency={this.props.agency}/>
            )}
          </tbody>
        </table>
      </div>
    );
  }

}
