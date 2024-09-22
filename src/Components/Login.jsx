import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="col-md-6 col-lg-4">
          <form className="p-4 border rounded">
            <h3 className="text-center">Login Account</h3>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
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
            <button type="submit" className="btn btn-success w-100 mb-2 mt-2">
              Login
            </button>
            <div className="mt-2">
              Forgot Password <NavLink to={'/forgot'}>Click Here</NavLink>
            </div>
            <div className="mb-2 mt-2">
              Don't Have an Account?{" "}
              <NavLink to={"/registration"}>Register</NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
