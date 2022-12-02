import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

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
    <div className="collection">
      {cards.map((cardItem, index) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Card Front"
            height="450"
            image={cardItem.frontImgSrc}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardItem.player}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                {cardItem.company} {cardItem.year} #{cardItem.number}
              </p>
              <p>
                {cardItem.team} {cardItem.position}
              </p>
            </Typography>
          </CardContent>
          <CardActions className="cardbtnSpace">
            <Button className="btn" size="small">
              Edit
            </Button>
            <Button className="btn btnRight" size="small">
              <DeleteIcon />
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
