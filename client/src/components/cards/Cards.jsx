import React, { Component } from "react";
import axios from "axios";
import Card from "./Card/Card";

export default class Cards extends Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:1337`).then((res) => {
      this.setState({ cards: res.data });
    });
  }

  deletefunc = (index, information) => {
    let cards = [...this.state.cards];
    let thecard = cards
      .map((card) => card)
      .filter((card) => card.title === index);
    thecard = thecard[0];
    let theinfos = thecard.infos;
    theinfos = theinfos
      .map((info) => info)
      .filter((info) => info !== information);
    thecard.infos = theinfos;
    cards.map((card) => {
      if (card.title === index) {
        card.infos = theinfos;
      }
      return card;
    });
    this.setState({ cards });
  };

  render() {
    return (
      <div className="container">
        <div className="card-deck text-center">
          {this.state.cards.map((data) => {
            return (
              <Card
                infos={data.infos}
                key={data.title}
                deleteinfo={this.deletefunc}
              >
                {data.title}
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}
