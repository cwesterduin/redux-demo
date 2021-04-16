import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Home, Todo } from './pages'
import { Layout } from './layout'
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </Layout>
  );
};

export default App