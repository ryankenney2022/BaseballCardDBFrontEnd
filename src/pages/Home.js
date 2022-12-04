import React, { useState, useEffect } from "react";

function Home() {
  const [cards, setCards] = useState([
    {
      _id: "",
      company: "",
      year: "",
      number: "",
      player: "",
      team: "",
      position: "",
      frontImgSrc: "",
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
      <h1>
        You have <em>{cards.length} </em>total cards in your collection.
      </h1>
    </div>
  );
}

export default Home;
