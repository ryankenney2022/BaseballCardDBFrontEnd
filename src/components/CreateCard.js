import React, { useState } from "react";
import axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import Row from "react-bootstrap/Row";

function Card(props) {
  const [card, setCard] = useState({
    company: "",
    year: "",
    number: "",
    player: "",
    team: "",
    position: "",
    frontImgSrc: "",
    quantity: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setCard((prevCard) => {
      return { ...prevCard, [name]: value };
    });
  }

  function submitCard(event) {
    event.preventDefault();
    const newCard = {
      company: card.company,
      year: card.year,
      number: card.number,
      player: card.player,
      team: card.team,
      position: card.position,
      frontImgSrc: card.frontImgSrc,
      quantity: card.quantity,
    };

    axios.post("http://localhost:5000/addCard", newCard);

    setCard({
      company: "",
      year: "",
      number: "",
      player: "",
      team: "",
      position: "",
      frontImgSrc: "",
      quantity: "",
    });
  }

  return (
    <div className="addCard">
      <Row className="g-1">
        <FloatingLabel
          controlId="floatingSelect"
          label="Brand"
          className="mb-1 floatinglabel"
        >
          <Form.Select
            type="string"
            name="company"
            onChange={handleChange}
            value={card.company}
            className="floatinglabel"
          >
            <option value="Select">Select card brand...</option>
            <option value="Bowman">Bowman</option>
            <option value="Donruss">Donruss</option>
            <option value="Fleer">Fleer</option>
            <option value="Leaf">Leaf</option>
            <option value="Score">Score</option>
            <option value="Topps">Topps</option>
            <option value="Upper Deck">Upper Deck</option>
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Card Year"
          className="mb-1 floatinglabel"
        >
          <Form.Control
            type="string"
            name="year"
            autoComplete="off"
            onChange={handleChange}
            value={card.year}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Card Number"
          className="mb-1 floatinglabel"
        >
          <Form.Control
            type="Number"
            name="number"
            autoComplete="off"
            onChange={handleChange}
            value={card.number}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Card Quantity"
          className="mb-1 floatinglabel"
        >
          <Form.Control
            type="Number"
            name="quantity"
            onChange={handleChange}
            value={card.quantity}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Player"
          className="mb-1 floatinglabel"
        >
          <Form.Control
            type="string"
            name="player"
            autoComplete="off"
            onChange={handleChange}
            value={card.player}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Team"
          className="mb-1 floatinglabel"
        >
          <Form.Control
            type="string"
            name="team"
            autoComplete="off"
            onChange={handleChange}
            value={card.team}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Position"
          className="mb-1 floatinglabel"
        >
          <Form.Control
            type="string"
            name="position"
            autoComplete="off"
            onChange={handleChange}
            value={card.position}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Image Link"
          className="mb-1 floatinglabel"
        >
          <Form.Control
            type="string"
            name="frontImgSrc"
            autoComplete="off"
            onChange={handleChange}
            value={card.frontImgSrc}
          />
        </FloatingLabel>
        <Button variant="contained" size="sm" onClick={submitCard}>
          Submit
        </Button>
      </Row>
    </div>
  );
}

export default Card;
