import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Route } from "react-router-dom";
import StepOne from "./step1/step1";
import StepTwo from "./step2/step2";
import StepThree from "./step3/step3";

export default class Wizard extends Component {
  render() {
    return (
      <div>
        Wizard
        <button>
          <Link to="/">Cancel</Link>
        </button>
        <Route path="/wizard/step1" component={StepOne} />
        <Route path="/wizard/step2" component={StepTwo} />
        <Route path="/wizard/step3" component={StepThree} />
      </div>
    );
  }
}
