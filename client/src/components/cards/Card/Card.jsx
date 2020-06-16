import React, { Component } from "react";
import Note from "./Note";
import "./Note.css";

export default class Card extends Component {
  state = {
    add: false,
    noteadded: "",
    todos: [
      { note: "First Note" },
      { note: "Second Note" },
      { note: "Third Note" },
    ],
  };

  submit = (event) => {
    event.preventDefault();
    console.log("value added :", this.state.noteadded);
    this.state.todos.push({ note: this.state.noteadded });
    this.setState({
      todos: [...this.state.todos],
    });
  };
  change = (event) => {
    this.setState({ noteadded: event.target.value });
  };
  render() {
    return (
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{this.props.children}</h4>
        </div>
        <div className="card-body col bg-dark">
          {this.state.todos.map((data) => {
            console.log(data.note);
            return <Note key={data.title}>{data.note}</Note>;
          })}
        </div>
        <form
          className="container-fluid form-inline"
          onSubmit={this.submit}
          onChange={this.change}
        >
          <input
            className="form-control"
            name="note"
            placeholder="+ Add Note"
            required
          />
          <button type="submit" className="btn btn-dark btn-sm">
            Add Note
          </button>
        </form>
      </div>
    );
  }
}
