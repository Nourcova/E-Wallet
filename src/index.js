import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { StateProvider } from './State'

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
     <StateProvider>
    <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);
