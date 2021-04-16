import React from 'react'
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/todo" render={() => <h1>Todo</h1>} />
    </Switch>
  );
};

export default App