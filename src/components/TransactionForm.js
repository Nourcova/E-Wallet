import React, { useState, useContext, useRef, useEffect } from "react";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Col,
  Row
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { StateContext } from "../State";
import "./TransactionForm.css";

const TransactionForm = () => {
  const [state, dispatch] = useContext(StateContext);

  let { name } = useParams();
  const [wallet, setWallet] = useState({});

  useEffect(() => {
    setWallet(state.wallets.filter((el) => el.walletname === name)[0]);
  }, [name, state.wallets]);

  const [type, setType] = useState("");

  const trans = useRef(null);
  const notes = useRef(null);
  const tags = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    // setTransactions([
    //   ...transactions,
    //   {
    //     trans: trans.current.value,
    //     notes: notes.current.value,
    //     tags: tags.current.value,
    //     type: type,
    //     date: new Date(),
    //     walletname: wallet.walletname
    //   }
    // ]);
    dispatch({
      type: "SET_TRANSACTIONS",
      payload: [
        ...state.transactions,
        {
          trans: trans.current.value,
          notes: notes.current.value,
          tags: tags.current.value,
          type: type,
          date: new Date(),
          walletname: wallet.walletname
        }
      ]
    });
  }

  function calBalance() {
    let balance = parseInt(wallet.walletBalance, 10);
    state.transactions
      .filter((el) => el.walletname === name)
      .forEach((transaction) => {
        if (transaction.type === "income") {
          balance += parseInt(transaction.trans, 10);
        } else {
          balance -= parseInt(transaction.trans, 10);
        }
      });
    return balance;
  }

  return (
    <div onSubmit={handleSubmit} style={{ width: "50%", margin: "20px auto" }}>
      <Form.Text className="text-muted">
        Wallet Balance: {wallet && calBalance()}
      </Form.Text>

      <div className="transform">
        <div>
          <Form.Group>
            <Form.Label>Make a Transaction</Form.Label>

            <InputGroup className="mb-3">
              <FormControl
                type="number"
                ref={trans}
                placeholder="make a transaction"
                aria-label="Amount (to the nearest dollar)"
                required
              />
              <InputGroup.Append>
                <InputGroup.Text>
                  {wallet && wallet.walletCurrency}
                </InputGroup.Text>
                <InputGroup.Text>{wallet && calBalance()}</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={10}>
              <Form.Check
                required
                type="radio"
                label="income"
                name="expense"
                id="income"
                value="income"
                onChange={(e) => setType(e.target.value)}
              />
              <Form.Check
                required
                type="radio"
                label="expence"
                name="expense"
                id="expense"
                value="expense"
                onChange={(e) => setType(e.target.value)}
              />
            </Col>
          </Form.Group>
        </div>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Transaction Notes</Form.Label>
          <Form.Control
            ref={notes}
            type="text"
            required
            placeholder="Transaction Notes"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Transaction Tags</Form.Label>
          <Form.Control
            ref={tags}
            required
            type="text"
            placeholder="Transaction Tags"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Transaction
        </Button>
      </div>
    </div>
  );
};

export default TransactionForm;
