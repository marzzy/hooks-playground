import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const Home = lazy(() => import('./Components/Home'));
const Counter = lazy(() => import('./Components/Counter'));
const UserName = lazy(() => import('./Components/UserName'));
const Calc = lazy(() => import('./Components/Calc'));
const TodoList = lazy(() => import('./Components/TodoList'));

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
        <Suspense fallback={<p>loading ....</p>}>
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
        </Suspense>
      </div>
    </Router>
  );
}
