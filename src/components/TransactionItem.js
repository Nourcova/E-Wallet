import React from "react";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

const TransactionItem = ({ transaction }) => {
  let color;
  if (transaction.type === "income") {
    color = "success";
  } else {
    color = "danger";
  }
  return (
    <Card border={color}>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={transaction.date}
        color="primary"
      >
        transaction made:{transaction.trans} date :
        {transaction.date.toDateString()}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={transaction.date}>
        <Card.Body>
          <p> notes: {transaction.notes} </p>
          <p> tags: {transaction.tags} </p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default TransactionItem;
