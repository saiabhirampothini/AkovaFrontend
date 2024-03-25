import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Nav1() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand mr-5" to="/">
          AKOVA
        </Link>
        {/* <a className="navbar-brand mr-5" href="Home.html">
          AKOVA
        </a> */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active mr-4">
            <Link className="nav-link" to="/login">
              LOGIN
            </Link>
            {/* <a className="nav-link" href="student.html">
              LOGIN
            </a> */}
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/register">
              SIGNUP
            </Link>
            {/* <a className="nav-link" href="enterprenuer.html">
              SIGNUP
            </a> */}
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
export default Nav1;
