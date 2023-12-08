import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";


const Cards = ({ escapes }) => {

  return (
    <>
    <div className="card">
      <Card>
        <Link to={"/escapes/details"} state={escapes}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="title_card">{escapes.nom_escapes}</Card.Title>
              <Card.Img className="image" variant="top" src={escapes.url} />
            </Card.Body>
          </Card>
        </Link>
      </Card></div>
    </>
  );
};

export default Cards;
