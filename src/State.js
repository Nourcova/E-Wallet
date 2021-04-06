import React, { createContext, useReducer } from "react";

export const StateContext = createContext();

const initialState = { wallets: [], transactions: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WALLETS":
      return { ...state, wallets: action.payload };
    case "SET_TRANSACTIONS":
      return { ...state, transactions: action.payload };
    default:
      return state;
  }
};

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(dispatch);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};


