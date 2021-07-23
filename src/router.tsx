import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./view/Home/Home";
import Contact from "./components/Contact/Contact";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default Routes;