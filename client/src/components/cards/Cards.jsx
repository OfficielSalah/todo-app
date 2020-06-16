import React, { Component } from "react";
import Card from "./Card/Card";

export default class Cards extends Component {
  state = {
    cards: [
      {
        title: "Things To Do",
        infos: ["1", "2", "3"],
      },
      {
        title: "Doing Right Now",
        infos: ["4", "5", "6"],
      },
      {
        title: "Completed",
        infos: ["First Note", "Second Note", "Third Note"],
      },
    ],
  };
  deletefunc = (index, information) => {
    let cards = [...this.state.cards]; //all the cards

    let thecard = cards
      .map((card) => card)
      .filter((card) => card.title === index);
    thecard = thecard[0]; // the card {title:...,infos:...}
    let theinfos = thecard.infos; //["1","2","3"]
    theinfos = theinfos
      .map((info) => info)
      .filter((info) => info !== information); // theinfos ["1","2"]
    thecard.infos = theinfos; //updated {title:...,infos:...}
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
          {}
        </div>
      </div>
    );
  }
}
