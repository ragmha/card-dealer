const API = {
  dealCards(numCards) {
    return fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    )
      .then(response => response.json())
      .then(({ deck_id }) =>
        fetch(
          `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${numCards}`
        )
      )
      .then(response => response.json());
  }
};

export default API;
