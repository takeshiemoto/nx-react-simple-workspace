import React from "react";
import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PageOne from "./PageOne";

export const App = () => {
  return (
    <Router>
      <Link to={"/"}>Home</Link>
      <Link to={"/one"}>PageOne</Link>
      <Switch>
        <Route exact path={"/"} render={() => <div>React Get Started</div>} />
        <Route exact path={"/one"} component={PageOne} />
      </Switch>
    </Router>
  );
};

export default App;
