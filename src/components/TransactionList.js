import React, { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { StateContext } from "../State";

const TransactionList = () => {
  const [state, dispatch] = useContext(StateContext);
  let { name } = useParams();

  console.log(name);
  return (
    <div style={{ width: "50%", margin: "20px auto" }}>
      <h1>here is a list </h1>
      <Accordion defaultActiveKey="0">
        {state.transactions &&
          state.transactions
            .filter((el) => el.walletname === name)
            .map((transaction) => (
              <TransactionItem
                key={transaction.date}
                transaction={transaction}
              />
            ))}
      </Accordion>
    </div>
  );
};

export default TransactionList;
