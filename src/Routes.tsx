import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default Routes;
