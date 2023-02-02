import React from "react"
import { Link, useLocation } from "react-router-dom"
import BreadCrumb from "../../components/BreadCrumb"
import Meta from "../../components/Meta"
import "./Login.scss"
const Login = () => {
  let location = useLocation()
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title={"Login"} />
      <div className="login-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-item-center">
              <div className="login-card">
                <h3 className="title mb-4 fs-4">Log In</h3>
                <form action="/login">
                  <div className="form-floating username mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                    />
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="form-floating password mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <Link to="forget-password" className="forget-password">
                    Forget Password?
                  </Link>
                  <div className="form-submit d-flex gap-3 justify-content-center">
                    <button
                      className={`btn ${
                        location.pathname === "/account/login" ? "active" : ""
                      }`}
                      type="submit"
                    >
                      Log In
                    </button>
                    <Link to="http://localhost:3000/account/signup">
                      <button
                        className={`btn ${
                          location.pathname === "/account/signup"
                            ? "active"
                            : ""
                        }`}
                        type="button"
                      >
                        Sign Up
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
