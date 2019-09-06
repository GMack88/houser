import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/houses")
      .then(results => {
        this.setState({ houses: results.data });
      })
      .catch(err => console.log(err));
  }

  deleteHouse(id) {
    axios
      .delete(`/api/houses/${id}`)
      .then(results => this.setState({ houses: results.data }))
      .catch(err => console.log(err));
  }

  render() {
    const displayHouses = this.state.houses.map((house, index) => (
      <House deleteHouse={this.deleteHouse} house={house} key={index} />
    ));
    return (
      <div>
        Dashboard
        <button>
          <Link to="/wizard">Add New Property</Link>
        </button>
        {displayHouses}
      </div>
    );
  }
}
