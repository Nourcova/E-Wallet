import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const NoWallet = () => {
  return (
    <div className="center">
      <img
        src="https://image.freepik.com/free-vector/money-transfer-with-digital-wallet-cashback_284092-636.jpg"
        alt="E-Wallet"
      />
      <Link to="/walletform">
        <Button variant="primary">Create New Wallet</Button>
      </Link>
    </div>
  );
};

export default NoWallet;
