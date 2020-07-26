import React from "react";
import "./app.scss";
import { Counter } from "./components/counter/counter";
import { CounterFunctionProps } from "./components/counter-function-props/counter-function-props";
import { CounterUseCallbackProps } from "./components/counter-use-callback-props/counter-use-callback-props";
import { CounterDouble } from "./components/counter-double/counter-double";
import { CounterUseMemoDouble } from "./components/counter-use-memo-double/counter-use-memo-double";
import { CounterUseRef } from "./components/counter-use-ref/counter-use-ref";
import SearchResults from "./components/search-results/search-results";

export const App = () => {
  return (
    <div className="app">
      <Counter />
      <CounterFunctionProps />
      <CounterUseCallbackProps />
      <CounterDouble />
      <CounterUseMemoDouble />
      <CounterUseRef />
      <SearchResults />
    </div>
  );
};

export default App;
