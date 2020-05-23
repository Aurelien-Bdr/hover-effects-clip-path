import React, { Component } from "react";
import HoverEffect1 from "./HoverEffect1/HoverEffect1";
import HoverEffect2 from "./HoverEffect2/HoverEffect2";
import HoverEffect3 from "./HoverEffect3/HoverEffect3";
import "./App.scss";
import "./reset.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HoverEffect1 />
        <HoverEffect2 />
        <HoverEffect3 />
      </div>
    );
  }
}

export default App;
