import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class StepTwo extends Component {
  constructor() {
    super();
    this.state = {
      url: ""
    };
  }
  componentWillMount() {
    this.setState({
      url: this.props.url
    });
  }
}

export default StepTwo;
