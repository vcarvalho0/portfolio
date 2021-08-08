import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import Navbar from './components/Navbar';

const Routes: React.FC = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
