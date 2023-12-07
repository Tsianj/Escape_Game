import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";


const Cards = ({ escapes }) => {
  return (
    <>
      <Card className={"col-3"}>
        <Link to={"/escapes/details"} state={escapes}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{escapes.nom_escapes}</Card.Title>
              <Card.Img variant="top" src={escapes.url} />
            </Card.Body>
          </Card>
        </Link>
      </Card>
    </>
  );
};

export default Cards;
