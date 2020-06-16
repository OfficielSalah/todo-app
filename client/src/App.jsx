import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/cards/Cards";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Cards />
      </div>
    );
  }
}
