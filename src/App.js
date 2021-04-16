import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Home, Todo, TodoSolo } from './pages'
import { Layout } from './layout'
import { useLocalState } from './customHooks'


const App = () => {

  useLocalState()

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={Todo} />
        <Route path="/todo/:id" component={TodoSolo} />
      </Switch>
    </Layout>
  );
};

export default App