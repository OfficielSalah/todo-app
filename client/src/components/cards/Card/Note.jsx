import React, { Component } from "react";
import "./Note.css";

export default class Note extends Component {
  state = {
    hide: false,
  };

  delete = () => {
    this.setState({ hide: true });
  };
  render() {
    return (
      <div className={`${this.state.hide ? "hide" : " "}`}>
        <div className="card">
          <p className="card-text border-darken-3">
            {this.props.children}
            <button type="button" className="close btn" onClick={this.delete}>
              <span>&times;</span>
            </button>
          </p>
        </div>
      </div>
    );
  }
}
