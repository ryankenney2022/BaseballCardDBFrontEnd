import React from "react";
import Button from "@mui/material/Button";
import "./styles.css";

function card(props) {
  function handleClick() {
    return props.onDelete(props.id);
  }

  return (
    <div>
      <form className="card">
        <h2>{props.player}</h2>
        <p>{props.company}</p>
        <p>{props.number}</p>
        <p>{props.team}</p>
        <p>{props.position}</p>
        <div>
          <Button className="btn" variant="contained" onClick={handleClick}>
            Delete
          </Button>
        </div>
      </form>
    </div>
  );
}

export default card;
