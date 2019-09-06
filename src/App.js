import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import House from "./Components/House/House";
import Wizard from "./Components/Wizard/Wizard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Dashboard</div>
        <div>Header</div>
        <div>House</div>
        <div>Wizard</div>
      </div>
    );
  }
}

export default App;
