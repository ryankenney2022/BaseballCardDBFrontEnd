import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

function Cards() {
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
  function deleteCard(id, e) {
    e.preventDefault();

    axios
      .delete(`http://localhost:5000/deleteCard/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="collection">
      {cards.map((cardItem, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            className="card-img"
            alt="Card Front"
            // height="450"
            image={cardItem.frontImgSrc}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardItem.player}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardItem.company} {cardItem.year} #{cardItem.number}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardItem.team} {cardItem.position}
            </Typography>
          </CardContent>
          <CardActions className="cardbtnSpace">
            <Button className="btn" size="small">
              Edit
            </Button>
            <Button
              onClick={(e) => deleteCard(cardItem._id, e)}
              className="btn"
              size="small"
            >
              <DeleteIcon />
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
