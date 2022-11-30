import React, { useState } from "react";
import "./styles.css";
import CreateCard from "./CreateCard";
import Card from "./Card";
import Button from "@mui/material/Button";
import axios from "axios";

function App() {
  const [cards, setCards] = useState([]);

  function addCard(newCard) {
    setCards((prevCards) => {
      return [...prevCards, newCard];
    });
  }

  function deleteCard(id) {
    setCards((prevCards) => {
      return prevCards.filter((cardItem, index) => {
        return index !== id;
      });
    });
  }

  function handleClick() {
    axios.get("/test").then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div>
      <h1>Card Collection Database</h1>
      <Button variant="contained" onClick={handleClick}>
        Test
      </Button>
      <CreateCard onAdd={addCard} />
      {cards.map((cardItem, index) => {
        return (
          <Card
            key={index}
            id={index}
            company={cardItem.company}
            number={cardItem.number}
            player={cardItem.player}
            team={cardItem.team}
            position={cardItem.position}
            onDelete={deleteCard}
          />
        );
      })}
    </div>
  );
}

export default App;
