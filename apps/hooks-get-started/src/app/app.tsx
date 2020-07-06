import React from "react";
import "./app.scss";
import { SearchResults } from "./components/search-results/search-results";
import { Counter } from "./components/counter/counter";

export const App = () => {
  const title = "Hooks get started";
  return (
    <div className="app">
      <Counter />
      <SearchResults />
    </div>
  );
};

export default App;
