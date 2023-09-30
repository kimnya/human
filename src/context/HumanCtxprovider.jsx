import React, { createContext, useReducer } from "react";

const initialData = {
  show: false,
  search: false,
  allItem: {},
};

export const CtxState = createContext(initialData);

const HumanCtxprovider = ({ children }) => {
  const reducer = () => {};
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <CtxState.Provider state={initialData}>{children}</CtxState.Provider>
    </>
  );
};

export default HumanCtxprovider;
