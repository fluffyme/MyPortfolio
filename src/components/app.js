import React, { Component } from "react";
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>My Portfolio</h1>
        <h2>React Redux Router</h2>
        <div>{moment().format("dddd")}</div>
      </div>
    );
  }
}
