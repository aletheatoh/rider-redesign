import React, { Component } from 'react';
import './css/StopPin.css';


export default class StopPin extends Component {
  constructor(props) {
    super(props)
  }

  onClick = (e) => {
    this.props.changeSelected(this.props.id)
  }

  render() {
    return (
      <div className="StopPin container" onClick={this.onClick} stopname={this.props.text.replace(/\(\d*\)/, '')}>
        🚏
        {this.props.selected ? <div className="stopName"> {this.props.text.replace(/\(\d*\)/, '')}</div>: ''}
      </div>
    );
  }

}

//
