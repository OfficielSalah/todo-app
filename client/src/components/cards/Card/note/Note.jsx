import React, { Component } from "react";
import "./Note.css";

export default class Note extends Component {
  state = {
    hide: false,
  };

  render() {
    return (
      <div className={`${this.state.hide ? "hide" : " "}`}>
        <div className="card">
          <p className="card-text">
            {this.props.children}
            <button
              type="button"
              className="close btn"
              onClick={() => {
                this.props.delete(this.props.champ, this.props.children);
              }}
            >
              <span>&times;</span>
            </button>
          </p>
        </div>
      </div>
    );
  }
}
