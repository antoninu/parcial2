import React from "react";
import Card from "react-bootstrap/Card";
import { FormattedMessage } from "react-intl";

export default function SerieCard({ serie }) {
  return (
    <Card style={{ width: "18rem" }}>
      {navigator.onLine ? (
        <Card.Img
          variant="top"
          src={serie.poster}
          alt={serie.name + " cover"}
        />
      ) : (
        <FormattedMessage id="imageError" />
      )}
      <Card.Body>
        <Card.Title>{serie.name}</Card.Title>
        <Card.Text>{serie.description}</Card.Text>
        <a href={serie.webpage}>{serie.webpage}</a>
      </Card.Body>
    </Card>
  );
}
