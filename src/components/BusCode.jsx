import React, { Component } from 'react';
import './css/BusCode.css';


export default class BusCode extends Component {

  render() {
    return (
      <div
        className="BusCode"
        style={{backgroundColor: this.props.color}}
      >
        {this.props.name+':'}
        <span className="timeEstimate">{this.props.timestamp + 'm'}</span>
      </div>
    );
  }

}

//
