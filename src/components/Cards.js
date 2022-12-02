import React, { useEffect, useState } from "react";

function Cards() {
  const [cards, setCards] = useState([
    {
      company: "",
      year: "",
      number: "",
      player: "",
      team: "",
      position: "",
      frontImgSrc: "",
      backImgSrc: "",
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
      {cards.map((cardItem, index) => (
        <div className="card">
          <img src={cardItem.frontImgSrc} alt="Card Front" className="img" />
          <img src={cardItem.backImgSrc} alt="Card Back" className="img" />
          <p>{cardItem.company}</p>
          <p>{cardItem.year}</p>
          <p>{cardItem.number}</p>
          <p>{cardItem.player}</p>
          <p>{cardItem.team}</p>
          <p>{cardItem.position}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
