import { useContext } from "react";
import "./styles.css";
import Header from "./components/Header";
import WalletForm from "./components/WalletForm";
import NOWallet from "./components/NOWallet";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateContext } from "./State";

export default function App() {
  const [state, dispatch] = useContext(StateContext);

  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <Route path="/" exact>
            <NOWallet />
          </Route>
          <Route path="/walletform">
            <WalletForm />
          </Route>

          <Route path="/wallet/:name">
            <TransactionForm />
            <TransactionList />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}
