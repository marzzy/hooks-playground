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
const Context = lazy(() => import('./Components/ContextComps'));
const ChangeLang = lazy(() => import('./Components/ChangeLang'));
const UseMemoExample = lazy(() => import('./Components/UseMemoExample'));
const MemoisedExample02 = lazy(() => import('./Components/MemoisedExample02'));

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
          <li>
            <Link to="/context">Context</Link>
          </li>
          <li>
            <Link to="/changeLang">ChangeLang</Link>
          </li>
          <li>
            <Link to="/useMemoExample">UseMemoExample</Link>
          </li>
          <li>
            <Link to="/MemoisedExample02">MemoisedExample02</Link>
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
            <Route path="/context">
              <Context />
            </Route>
            <Route path="/changeLang">
              <ChangeLang />
            </Route>
            <Route path="/useMemoExample">
              <UseMemoExample />
            </Route>
            <Route path="/MemoisedExample02">
              <MemoisedExample02 />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}
