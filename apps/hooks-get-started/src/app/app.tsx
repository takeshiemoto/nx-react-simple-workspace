import React from 'react';
import './app.scss';
import SearchResults from './components/search-results/search-results';

export const App = () => {
  const title = 'Hooks get started';
  return (
    <div className="app">
      <h1>{title}</h1>
      <SearchResults />
    </div>
  );
};

export default App;
