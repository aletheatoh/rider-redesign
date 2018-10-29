import React, { Component } from 'react';
import StopArrivalEstimate from './StopArrivalEstimate.jsx'
import './css/NearestStopList.css';


export default class NearestStopList extends Component {
  render() {
    return (
      <div className="NearestStopList container">
        {this.props.stops.map(
          s => <StopArrivalEstimate stop={s}/>
      )}
      </div>
    );
  }

}
