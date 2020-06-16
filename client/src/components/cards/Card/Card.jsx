import React, { Component } from "react";
import Note from "./note/Note";

export default class Card extends Component {
  state = {
    add: false,
    noteadded: "",
    infos: [],
  };
  componentDidMount() {
    this.setState({ infos: this.props.infos });
  }
  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.infos !== this.props.infos) {
      this.update();
    }
  }

  update = () => {
    this.setState({ infos: this.props.infos });
  };

  submit = (event) => {
    event.preventDefault();
    this.state.infos.push(this.state.noteadded);
    this.setState({
      infos: [...this.state.infos],
      noteadded: "",
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
          {this.state.infos.map((data) => {
            return (
              <Note
                key={data}
                delete={this.props.deleteinfo}
                champ={this.props.children}
              >
                {data}
              </Note>
            );
          })}
        </div>
        <form className="container-fluid form-inline" onSubmit={this.submit}>
          <input
            className="form-control"
            name="note"
            onChange={this.change}
            value={this.state.noteadded}
            placeholder="+ Add Note"
            autoComplete="off"
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
