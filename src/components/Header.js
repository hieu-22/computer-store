import React from "react"
import { Link, NavLink } from "react-router-dom"
import { BsSearch } from "react-icons/bs"

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Welcome !</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+84 370000654">
                  +84 370000654
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xl">
          <div className="row align-item-center">
            <div className="col-2 col-align-center">
              <h2 className="m-0">
                <Link to="/" className="text-white d-block">
                  Computer
                </Link>
              </h2>
            </div>
            <div className="col-5 col-align-center">
              <div className="input-group">
                <input
                  className="form-control py-1 rounded-start-1 fs-6"
                  type="text"
                  placeholder="Search Product Here..."
                />
                <span className="input-group-text rounded-end-1">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5 col-align-center">
              <div className="header-upper__links d-flex align-item-center justify-content-between w-100 ps-5">
                <div className="">
                  <Link to="/compare-product" className="d-inline-flex ">
                    <img src="images/compare.svg" alt="compare" />
                    <p className="linkLabel text-white">
                      Compare
                      <br />
                      product
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link to="/wishlist" className="d-inline-flex ">
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="linkLabel text-white">
                      Wish
                      <br />
                      list
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link to="/account/login" className="d-inline-flex ">
                    <img src="images/user.svg" alt="user" />
                    <p className="linkLabel text-white">
                      Log In /<br />
                      Sign Up
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link to="cart" className="d-inline-flex ">
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-2">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="text-white">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-item-center">
                <div className="categories">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="dropdown-list btn btn-secondary dropdown-toggle bg-transparent border-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="/images/menu.svg" alt="menu-icon" />
                      <span className="ms-4 me-5">Category</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <nav className="menu-link d-flex align-item-center">
                  <NavLink className="d-block" to="/" activeClassName="active">
                    HOME
                  </NavLink>
                  <NavLink
                    className="d-block"
                    to="/our-store"
                    activeClassName="active"
                  >
                    OUR STORE
                  </NavLink>
                  <NavLink
                    className="d-block"
                    to="/blogs"
                    activeClassName="active"
                  >
                    BLOGS
                  </NavLink>
                  <NavLink
                    className="d-block"
                    to="/contact"
                    activeClassName="active"
                  >
                    CONTACT
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
