import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <header className="navbar-container">
        <nav className=" bg-dark text-white navbar navbar-expand-lg navbar-dark 
        fixed-top d-flex justify-content-around align-items-center">
          <ul className ="navbar-nav mr-auto">
            <li className="nav-item active mr-2">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item active mr-2">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item active">
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <div className="d-flex justify-content-around">
            <Link className="m-0 mr-3 btn btn-primary " to ="/logIn">Log in</Link>
            <Link className="m-0 btn btn-outline-primary">Sign up</Link>
          </div>
        </nav>
    </header>
  );
}