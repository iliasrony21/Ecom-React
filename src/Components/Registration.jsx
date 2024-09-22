import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Registration extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="col-md-6 col-lg-4">
          <form className="p-4 border rounded">
            <h3 className="text-center">Registration Account</h3>
            <div className="mb-3">
              <label className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password_confirmation"
              />
            </div>
            <button type="submit" className="btn btn-success w-100 mb-2 mt-2">
              Register
            </button>
            <div className="mb-2 mt-2">
              Already Have an Account?
              <NavLink to={"/login"}>Login</NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
