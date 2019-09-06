import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0,
      mortgage: 0,
      url: "",
      rent: 0
    };
  }
}
export default StepThree;
