import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg text-white"
          style={{ backgroundColor: "#7431FA" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
              E-commerce
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul id="navigation" className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `nav-link text-white ${isActive ? "active-link" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to={"/profile"}  className={({ isActive }) =>
                      `nav-link text-white ${isActive ? "active-link" : ""}`
                    }>
                    Profile
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <NavLink className="nav-link me-3" to={'/login'}>Login</NavLink>
                <span>|</span>
                <NavLink className="nav-link ms-3" to={'/registration'}>Registration</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
