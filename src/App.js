import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Counter from './Components/Counter';
import UserName from './Components/UserName';
import Calc from './Components/Calc';
import TodoList from './Components/TodoList';
import Home from './Components/Home';

export default function BasicNavigation() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calc">calc</Link>
          </li>
          <li>
            <Link to="/counter">counter</Link>
          </li>
          <li>
            <Link to="/userName">userName</Link>
          </li>
          <li>
            <Link to="/todo">todo</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calc">
            <Calc />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/userName">
            <UserName />
          </Route>
          <Route path="/todo">
            <TodoList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
