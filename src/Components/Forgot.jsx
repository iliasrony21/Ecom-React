import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Forgot extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 col-lg-4">
        <form className="p-4 border rounded">
          <h3 className="text-center">Forgot Password</h3>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 mb-2 mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
    )
  }
}
