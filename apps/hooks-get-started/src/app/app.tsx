import React from "react";
import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PageOne from "./PageOne";
import { Counter } from "./components/counter/counter";

export const App = () => {
  return (
    <Router>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/simple-counter"}>Simple Counter</Link>
        <Link to={"/page-one"}>PageOne</Link>
      </div>
      <Switch>
        <Route exact path={"/"} render={() => <div>React Get Started</div>} />
        <Route exact path={"/simple-counter"} component={Counter} />
        <Route exact path={"/page-one"} component={PageOne} />
      </Switch>
    </Router>
  );
};

export default App;
