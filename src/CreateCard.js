import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Card(props) {
  const [card, setCard] = useState({
    company: "",
    number: "",
    player: "",
    team: "",
    position: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setCard((prevCard) => {
      return { ...prevCard, [name]: value };
    });
  }

  function submitCard(event) {
    props.onAdd(card);

    setCard({
      company: "",
      number: "",
      player: "",
      team: "",
      position: "",
    });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <label>Add new card</label>
        <input
          name="company"
          placeholder="Brand"
          onChange={handleChange}
          value={card.company}
        />
        <input
          name="number"
          placeholder="Card Number"
          onChange={handleChange}
          value={card.number}
        />
        <input
          name="player"
          placeholder="Player"
          onChange={handleChange}
          value={card.player}
        />
        <input
          name="team"
          placeholder="Team"
          onChange={handleChange}
          value={card.team}
        />
        <input
          name="position"
          placeholder="Position"
          onChange={handleChange}
          value={card.position}
        />

        <button onClick={submitCard}>Submit</button>
      </form>
    </div>
  );
}

export default Card;
