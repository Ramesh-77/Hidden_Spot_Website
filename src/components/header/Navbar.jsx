import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="../../../src/assets/images/Hidden-Spot-Final-Logo-1.png"
              alt="Hidden Spot"
              width={80}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto d-flex gap-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu bg-dark">
                  {/* cafe */}
                  <li className="nav-item dropend ">
                    <a
                      className="nav-link dropdown-toggle ms-2"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Cafe
                    </a>
                    <ul className="dropdown-menu">
                      {/* cafe */}
                      <li>
                        <a className="dropdown-item" href="#">
                          Breakfast
                        </a>
                      </li>
                      {/* High Tea */}
                      <li>
                        <a className="dropdown-item" href="#">
                          Lunch
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* end cafe */}
                  {/* High Tea */}
                  <li>
                    <a className="dropdown-item" href="#">
                      High Tea
                    </a>
                  </li>
                  {/* divider */}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  {/* catering */}
                  <li className="nav-item dropend catering-dropdown">
                    <a
                      className="nav-link dropdown-toggle ms-2"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Catering
                    </a>
                    <ul className="dropdown-menu">
                      {/* cafe */}
                      <li>
                        <a className="dropdown-item" href="#">
                          Catering One
                        </a>
                      </li>
                      {/* High Tea */}
                      <li>
                        <a className="dropdown-item" href="#">
                          Catering Two
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* meal prep */}
                  <li>
                    <a className="dropdown-item" href="#">
                      Meal Prep
                    </a>
                  </li>
                </ul>
              </li>
              {/* gallery */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              {/* contact */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              {/* func enquiry btn */}
              <li className="nav-item">
                <button className="btn btn-sm nav-link function-enquiry-form-btn">
                  Function Enquiry Form
                </button>
              </li>
            </ul>
            {/* product search */}
            <form className="d-flex search-form" role="search">
              <input
                className="form-control search-field"
                type="search"
                placeholder="Search...."
                aria-label="Search"
              />
              <span className="search-icon-box">
                <i className="fa-solid fa-magnifying-glass fs-4 text-white search-icon"></i>
              </span>
            </form>
            {/* account and cart */}
            <ul className="navbar-nav mx-auto d-flex gap-5">
              <li className="nav-item">
                <NavLink to={"/login"}>
                  <i className="fa-solid fa-user fs-4 text-white"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/cart"} className="cart-icon">
                  <i className="fa-solid fa-cart-shopping fs-4 text-white"></i>
                  <p className="cart-number-box">
                    <span className="cart-number fs-4">1</span>
                  </p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
