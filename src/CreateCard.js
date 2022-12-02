import React, { useState } from "react";
import axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
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
    backImgSrc: "",
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
      backImgSrc: card.backImgSrc,
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
      backImgSrc: "",
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
          {/* <Form.Control
          type="string"
          name="company"
          placeholder="Topps, Upper Deck, etc..."
          onChange={handleChange}
          value={card.company}
        /> */}
          <Form.Select
            type="string"
            name="company"
            placeholder="Topps, Upper Deck, etc..."
            onChange={handleChange}
            value={card.company}
            aria-label="Floating label select example"
            className="floatinglabel"
          >
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
            placeholder="Topps, Upper Deck, etc..."
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
            type="string"
            name="number"
            placeholder="Topps, Upper Deck, etc..."
            onChange={handleChange}
            value={card.number}
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
            placeholder="Topps, Upper Deck, etc..."
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
            placeholder="Topps, Upper Deck, etc..."
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
            placeholder="Topps, Upper Deck, etc..."
            onChange={handleChange}
            value={card.position}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Front Image Link Address"
          className="mb-1 floatinglabel"
        >
          <Form.Control
            type="string"
            name="frontImgSrc"
            placeholder="Topps, Upper Deck, etc..."
            onChange={handleChange}
            value={card.frontImgSrc}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Back Image Link Address"
          className="mb-1 floatinglabel"
        >
          <Form.Control
            type="string"
            name="backImgSrc"
            placeholder="Topps, Upper Deck, etc..."
            onChange={handleChange}
            value={card.backImgSrc}
          />
        </FloatingLabel>
        <Button variant="dark" size="sm" className="btn" onClick={submitCard}>
          Submit
        </Button>
      </Row>
    </div>
  );
}

export default Card;
