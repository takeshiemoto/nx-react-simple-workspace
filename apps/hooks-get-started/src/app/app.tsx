import React from 'react';
import './app.scss';
import Heroes from './components/heroes/heroes';

export const App = () => {
  const title = 'Tour of heroes';
  return (
    <div className="app">
      <h1>{title}</h1>
      <Heroes />
    </div>
  );
};

export default App;
