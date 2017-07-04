import React, { Component } from "react";

import API from "./API";
import HandCards from "./HandCards";

class Hand extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      cards: null
    };
    this.fetchCards = this.fetchCards.bind(this);
  }

  fetchCards() {
    this.setState({ loading: true });
    API.dealCards(5).then(({ cards }) => {
      this.setState({ cards, loading: false });
    });
  }
  render() {
    const { cards, loading } = this.state;

    return (
      <div className="Hand">
        <HandCards cards={cards} numPlaceholders={5} />
        {loading
          ? <div className="Loading">
              <img src="https://frontend.center/images/loading.svg" />
            </div>
          : <button className="Button" onClick={this.fetchCards}>
              {cards ? "Replace hand" : "Get cards"}
            </button>}
      </div>
    );
  }
}

export default Hand;
