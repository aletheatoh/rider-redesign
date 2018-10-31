import React, { Component } from 'react';
import './css/StopPin.css';


export default class StopPin extends Component {

  onClick = (e) => {
    this.props.changeSelected(this.props.stop)
  }

  render() {
    return (
      <div className="StopPin container" onClick={this.onClick} stopname={this.props.text.replace(/\(\d*\)/, '')}>
        <span role="img">🚏</span>
        {this.props.selected ? <div className="stopName"> {this.props.text.replace(/\(\d*\)/, '')}</div>: ''}
      </div>
    );
  }

}

//
