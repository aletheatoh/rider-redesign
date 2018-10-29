import React, { Component } from 'react';
import './css/StopPin.css';


export default class StopPin extends Component {
  constructor(props) {
    super(props)
  }

  onClick(e) {
    console.log(e.target)
    e.target.innerText = e.target.getAttribute('stopname')
    setTimeout(function () { e.target.innerText = '🚏' }, 1000)
  }

  render() {

    return (
      <div className="StopPin container" onClick={this.onClick} stopName={this.props.text.replace(/\(\d*\)/, '')}>
        🚏
        <span className="stopName">{this.props.text.replace(/\(\d*\)/, '')}</span>
      </div>
    );
  }

}
