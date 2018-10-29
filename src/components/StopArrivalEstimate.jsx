import React, { Component } from 'react';
// import IngredientsListItem from './IngredientsListItem.jsx'
import './css/StopArrivalEstimate.css';


export default class StopArrivalEstimate extends Component {
  render() {
    return (
      <tr className="StopArrivalEstimateRow container">
        <td className="distance">{this.props.dist + 'm'}</td>
        <td className="stopNameEstimate">{this.props.stop.name.replace(/\(\d*\)/, '')}</td>
      </tr>
    );
  }

}
