import React from 'react';
import Pokedex from "./components/pokedex/pokedex"


//import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav className=" bg-dark text-white navbar navbar-expand-lg navbar-dark 
        fixed-top d-flex justify-content-around align-items-center">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active mr-2">
              <Link to="/">Home</Link>
            </li>
            <li class="nav-item active mr-2">
              <Link to="/about">About</Link>
            </li>
            <li class="nav-item active">
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <div className="d-flex justify-content-around">
            <div className="m-0 mr-3 btn btn-primary">Log in</div>
            <div className="m-0 btn btn-outline-primary">Sign up</div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <Pokedex/>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

