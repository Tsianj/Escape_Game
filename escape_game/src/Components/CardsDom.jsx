import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";


const Cards = ({ escapesdom }) => {

  return (
    <>
    <div className="card">
      <Card className={"col-3"}>
        <Link to={"/escapes/details"} state={escapesdom}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="title_card">{escapesdom.nom_escapes}</Card.Title>
              <Card.Img className="image" variant="top" src={escapesdom.url} />
            </Card.Body>
          </Card>
        </Link>
      </Card></div>
    </>
  );
};

export default Cards;