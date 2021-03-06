import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Live from './pages/Live';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/live" component={Live} />
    </Switch>
  );
}
