import React from "react";
import Card from "react-bootstrap/Card";

export default function SerieCard({ serie }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={serie.poster} />
      <Card.Body>
        <Card.Title>{serie.name}</Card.Title>
        <Card.Text>{serie.description}</Card.Text>
        <a href={serie.webpage}>{serie.webpage}</a>
      </Card.Body>
    </Card>
  );
}
