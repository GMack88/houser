import React, { Component } from "react";

export default class House extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { house, deleteHouse } = this.props;
    return (
      <div>
        House
        <h1>Name: {house.name}</h1>
        <p>Address: {house.address}</p>
        <p>City: {house.city}</p>
        <p>State: {house.state}</p>
        <p>Zip Code: {house.zipcode}</p>
        <p>Id: {house.id}</p>
        <button onClick={() => deleteHouse([house.id])}>Delete</button>
      </div>
    );
  }
}
