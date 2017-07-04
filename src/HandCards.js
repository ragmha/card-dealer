import React from "react";

const suits = "CLUBS DIAMONDS HEARTS SPADES".split(" ");
const values = "ACE 2 3 4 5 6 7 8 9 10 JACK QUEEN KING".split(" ");
const offset = ({ suit, value }) => {
  const sequenceNumber = 13 * suits.indexOf(suit) + values.indexOf(value);
  return `${-100 * sequenceNumber}% 0%`;
};

const Card = ({ card }) =>
  <div className="Card" style={{ backgroundPosition: offset(card) }} />;

const renderCards = cards =>
  cards.map(card => <Card key={card.code} card={card} />);

const renderPlaceholders = numPlaceholders =>
  Array(numPlaceholders)
    .fill()
    .map((_, i) => <div key={i} className="PlaceholderCard" />);

const HandCards = ({ cards, numPlaceholders }) =>
  <div className="Hand_Cards">
    {cards ? renderCards(cards) : renderPlaceholders(numPlaceholders)}
  </div>;

export default HandCards;
