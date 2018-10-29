export default class TranslocAgency {

  constructor(agency) {
    this.url = 'https://feeds.transloc.com/3/'
    this.agency = agency
  }

  async getAgencies() {
    let params = {agencies: this.agency}
    return await this.executeFetch('agencies', params)
  }

  async getSegments() {
    let params = {agencies: this.agency}
    return await this.executeFetch('segments', params)
  }

  async getStops(include_routes = true) {
    let params = {agencies: this.agency, include_routes}
    return await this.executeFetch('stops', params)
  }

  async getRoutes() {
    let params = {agencies: this.agency}
    return await this.executeFetch('routes', params)
  }

  async getVehicleStatuses() {
    let params = {agencies: this.agency}
    return await this.executeFetch('vehicle_statuses', params)
  }

  async getArrivals(stop_id) {
    let params = {agencies: this.agency, stop_id}
    return await this.executeFetch('arrivals', params)
  }

  async executeFetch(endpoint, params) {
    let getParams = '?' + Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&');
    let response = await fetch(this.url + endpoint + getParams, {
      "referrer": "https://duke.transloc.com/",
      "referrerPolicy":"no-referrer-when-downgrade",
      "method":"GET","mode":"cors"}
    )
    return await response.json();
  }
}
