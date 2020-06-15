import React, { Component } from "react";
import Card from "./Card/Card";

export default class Cards extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-deck mb-3 text-center">
          <Card>Things To Do</Card>
          <Card>Doing Right Now</Card>
          <Card>Completed</Card>
        </div>
      </div>
    );
  }
}
