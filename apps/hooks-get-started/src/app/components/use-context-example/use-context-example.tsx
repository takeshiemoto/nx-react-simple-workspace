import React, { createContext, useContext } from "react";

import "./use-context-example.scss";

const context = createContext("");

const ContextSample = () => {
  const text = useContext(context);
  return <div>{text}</div>;
};

export const UseContextExample = () => {
  return (
    <context.Provider value={"Hello"}>
      <ContextSample />
    </context.Provider>
  );
};

export default UseContextExample;
