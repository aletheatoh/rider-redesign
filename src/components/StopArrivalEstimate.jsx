import React, { Component } from 'react';
// import IngredientsListItem from './IngredientsListItem.jsx'
import './css/StopArrivalEstimate.css';


export default class StopArrivalEstimate extends Component {
  render() {
    return (
      <div className="StopArrivalEstimate container">
        <span>{this.props.stop}</span>
      </div>
    );
  }

}
