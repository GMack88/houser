import React from "react";
import "./App.css";
import routes from "./routes";
import Header from "./Components/Header/Header";
import House from "./Components/House/House";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
