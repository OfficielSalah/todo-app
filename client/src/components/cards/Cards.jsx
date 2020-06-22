import React, { Component } from "react";
import axios from "axios";
import Card from "./Card/Card";

export default class Cards extends Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:9229`).then((res) => {
      this.setState({ cards: res.data });
    });
  }

  deleteFunc = (index, information) => {
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
          {this.state.cards.map((card) => {
            return (
              <Card
                infos={card.infos}
                key={card.title}
                deleteinfo={this.deleteFunc}
              >
                {card.title}
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}
