import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
function Nav3() {
  const navigate = useNavigate();
  const onLogout = async (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("profession");
    navigate("/login");
  };
  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
        <div className="container text-white">
          <Link className="navbar-brand" to="/enterprenuer-dashboard">
            Akova
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar1"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar1">
            <ul className="navbar-nav nav nav-fill w-100">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/post-problem">
                  Post a problem
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/invest-project">
                  Request Investment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/investment-status">
                  Investment Request Status
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link
                  className="nav-link text-white"
                  to="/enterprenuer-profile"
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    onLogout(e);
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
export default Nav3;
