import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import { Home, Todo, TodoSolo } from './pages'
import { Layout } from './layout'
import { useSelector, useDispatch } from 'react-redux'
import { loadState } from "./actions";

const App = () => {
    const dispatch = useDispatch()

    const appState = useSelector((state) => state);

    useEffect(() => {
        const storeState = localStorage.getItem('state')
        console.log(storeState.length)
        if (storeState.length > 2) {
        dispatch(loadState(JSON.parse(storeState)))
        }
        else {}
    }, []);

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(appState))
    }, [appState]);

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