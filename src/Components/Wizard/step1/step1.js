import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class StepOne extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  submitHandler = () => {
    axios
      .post("/api/houses", this.state)
      .then(results => console.log(results))
      .catch(err => console.log(err));
  };
}
CanvasRenderingContext2D() {
    return(

<form onSubmit={() => this.submitHandler()}>
  <input
    name="name"
    onChange={this.handleInputChange}
    type="text"
    placeholder="name"
  ></input>
  <input
    name="address"
    onChange={this.handleInputChange}
    type="text"
    placeholder="address"
  ></input>
  <input
    name="city"
    onChange={this.handleInputChange}
    type="text"
    placeholder="city"
  ></input>
  <input
    name="state"
    onChange={this.handleInputChange}
    type="text"
    placeholder="state"
  ></input>
  <input
    name="zipcode"
    onChange={this.handleInputChange}
    type="text"
    placeholder="zipcode"
  ></input>
  <button type="submit">Complete</button>
</form>;
    )
}
export default StepOne;
