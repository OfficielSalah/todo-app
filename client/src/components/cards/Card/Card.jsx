import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{this.props.children}</h4>
        </div>
        <div className="card-body col bg-dark">
          <div class="card ">
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
          <br />
          <div class="card ">
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
          <br />
          <div class="card ">
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    );
  }
}
