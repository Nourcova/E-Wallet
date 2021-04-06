import React, { useContext, useRef, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { StateContext } from "../State";

export default function WalletForm() {
  const [state, dispatch] = useContext(StateContext);

  const name = useRef(null);
  const balance = useRef(null);
  const description = useRef(null);
  const [currency, setCurrency] = useState("");
  let history = useHistory();

  function addWallet(e) {
    e.preventDefault();
    if (
      state.wallets.filter(
        (element) => element.walletname === name.current.value
      ).length !== 0
    ) {
      alert("wallet name already exsit, change wallet name");
    } else {
      if (!balance.current.value) {
        balance.current.value = 0;
      }

      // setWallets([
      //   ...wallets,
      //   {
      //     walletname: name.current.value,
      //     walletBalance: balance.current.value,
      //     walletdescription: description.current.value,
      //     walletCurrency: currency,
      //     id: new Date()
      //   }
      // ]);

      dispatch({
        type: "SET_WALLETS",
        payload: [
          ...state.wallets,
          {
            walletname: name.current.value,
            walletBalance: balance.current.value,
            walletdescription: description.current.value,
            walletCurrency: currency,
            id: new Date()
          }
        ]
      });

      history.push("/wallet/" + name.current.value);
    }
  }

  return (
    <Form
      style={{ width: "50%", margin: "20px auto" }}
      onSubmit={(e) => {
        addWallet(e);
      }}
    >
      <Form.Group>
        <Form.Label>Wallet name</Form.Label>
        <Form.Control
          required
          ref={name}
          type="text"
          placeholder="Wallet Name"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>description </Form.Label>
        <Form.Control
          required
          ref={description}
          type="text"
          placeholder="description"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>balance </Form.Label>
        <Form.Control
          required
          ref={balance}
          type="number"
          placeholder="balance"
        />
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label as="legend" column sm={2}>
          Currency
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            required
            type="radio"
            label="dollar $"
            value="$"
            id="dollar"
            name="currency"
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
          />
          <Form.Check
            required
            type="radio"
            label="LBP"
            name="currency"
            id="LBP"
            value="LBP"
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
          />
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add wallet
      </Button>
    </Form>
  );
}
