import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Home, Todo } from './pages'
import { Layout } from './layout'
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={Todo} />
        <Route path="/todo/:id" render={() => <h1>...</h1>} />
      </Switch>
    </Layout>
  );
};

export default App