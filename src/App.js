import React, { Component } from "react";
import Start from "./components/Start";
import "./output.css";
import background from "./assets/background.png";

export default class App extends Component {
  render() {
    return (
      <div>
        <Start startTitle={"測試一下你的ガチ恋程度"} />
      </div>
    );
  }
}
