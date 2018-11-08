import React, { Component } from 'react';
import './css/StopTimeArrivals.css';
import { routes } from '../routes.js'

export default class StopTimeArrivals extends Component {

  exit = () => {
    this.props.setMode('list', null)
  }

  constructor (props) {
    super(props)
    this.state = {arrivals: []}
  }

  componentDidMount () {
    this.getArrivals(this.props.selected)
  }

  async getArrivals (stop) {
    let arrivals = await this.props.agency.getArrivals(stop.id);
    arrivals = arrivals.arrivals.map((a) => {
      return {...a, estimate: this.getTimeEstimate(a.timestamp)}
    }).sort((a, b) => {return a.estimate-b.estimate} )
    this.setState({arrivals: arrivals})
  }

  getTimeEstimate(t) {
    return  Math.trunc((new Date(t*1000) - new Date())/(1000*60))
  }

  ArrivalTime = (props) => (
    <tr className="arrivalTime" style={{color: this.props.colors}}>
      <td className="busName">{props.name}</td>
      <td className="minutes">{props.time}</td>
    </tr>
  )

  getRouteName = (id) => {
    let r = routes.find((r) => {return r.id === id})
    if (r) {
      return r['long_name']
    }
    return 'Bus'
  }

  getColor = (id) => {
    let r = routes.find((r) => {return r.id === id})
    if (r) {
      return '#' + r['color']
    }
    return '#000000'
  }

  render() {
    return (
      <div className="NearestStopList container">
        <span className="stopHeading">{this.props.selected.name}</span>
        <span className="exit" onClick={this.exit}>✖</span>
        <table className="table">
          <tbody>
            {this.state.arrivals
              .map(
                (a) =>
                  {return <this.ArrivalTime
                      name={this.getRouteName(a.route_id)}
                      color={this.getColor(a.route_id)}
                      time={this.getTimeEstimate(a.timestamp)}
                    />
                  }
              )
            }
          </tbody>
        </table>
      </div>
    );
  }

}
