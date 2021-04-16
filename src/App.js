import React from 'react'
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/todo" component={About} />
    </Switch>
  );
};

export default App