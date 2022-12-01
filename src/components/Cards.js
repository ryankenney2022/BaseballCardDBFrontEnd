import React, { useEffect, useState } from "react";

function Cards() {
  const [cards, setCards] = useState([
    {
      company: "",
      number: "",
      player: "",
      team: "",
      position: "",
    },
  ]);

  useEffect(() => {
    fetch("/cards")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setCards(jsonRes));
  });

  return (
    <div>
      <h1>Cards in Collection</h1>
      {cards.map((cardItem, index) => (
        <div className="card">
          <h2>{cardItem.company}</h2>
          <h2>{cardItem.number}</h2>
          <h2>{cardItem.player}</h2>
          <h2>{cardItem.team}</h2>
          <h2>{cardItem.position}</h2>
        </div>
      ))}
    </div>
  );
}

export default Cards;
