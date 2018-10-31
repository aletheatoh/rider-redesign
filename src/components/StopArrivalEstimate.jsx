import React, { Component } from 'react';
import './css/StopArrivalEstimate.css';
import { routes } from '../routes.js'
import BusCode from './BusCode.jsx'


export default class StopArrivalEstimate extends Component {

  constructor (props) {
    super(props)
    this.state = {arrivals: []}
  }
  async getArrivals (stop) {
    let arrivals = await this.props.agency.getArrivals(stop.id);
    arrivals = arrivals.arrivals.map((a) => {
      return {...a, estimate: this.getTimeEstimate(a.timestamp)}
    }).sort((a, b) => {return a.estimate-b.estimate} )

    this.setState({arrivals: arrivals})
  }

  getRouteName = (id) => {
    let r = routes.find((r) => {return r.id === id})
    if (r) {
      return r['long_name'].split(':')[0]
    }
    return 'Bus'
  }

  componentDidMount () {
    this.getArrivals(this.props.stop)
  }

  getColor = (id) => {
    let r = routes.find((r) => {return r.id === id})
    if (r) {
      return '#' + r['color']
    }
    return '#000000'
  }

  uniq (a) {
      let seen = {};
      return a.filter(function(item) {
          return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });
  }

  getTimeEstimate(t) {
    return  Math.trunc((new Date(t*1000) - new Date())/(1000*60))
  }

  onClick = (e) =>{
    this.props.setMode('stop', this.props.stop)
  }

  render() {
    return (
      <tr key={this.props.stop.id} onClick={this.onClick} className={"StopArrivalEstimateRow container" + (this.props.selected === true ? " highlighted" : '')}>
        <td className="distance">{this.props.dist + 'm'}</td>
        <td className="stopNameEstimate">
          {this.props.stop.name.replace(/\(\d*\)/, '')}
          <br/>
          <div className="BusCodes">
            {this.state.arrivals
              .slice(0,3)
              .map(
                (a) =>
                  {return <BusCode
                      timestamp={this.getTimeEstimate(a.timestamp)}
                      name={this.getRouteName(a.route_id)}
                      color={this.getColor(a.route_id)}
                    />
                  }
              )
            }
          </div>
        </td>
      </tr>
    );
  }

}
