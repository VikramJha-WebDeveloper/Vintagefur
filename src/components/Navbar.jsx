import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  a.active {
    background-color: rgb(253, 193, 7);
  }
`;

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a href="#" className="navbar-brand fs-3 fw-bolder">
          VINTAGEFUR
        </a>
        <div
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navtoggle"
        >
          <span className="navbar-toggler-icon"></span>
        </div>
        <div className="collapse navbar-collapse" id="navtoggle">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-3">
              <NavLink
                to="/"
                className="text-center rounded nav-link text-uppercase text-dark"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                to="/services"
                className="text-center rounded nav-link text-uppercase text-dark"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                to="about"
                className="text-center rounded nav-link text-uppercase text-dark"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                to="shop"
                className="text-center rounded nav-link text-uppercase text-dark"
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                to="contact"
                className="text-center rounded nav-link text-uppercase text-dark"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="search-login">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="#" className="nav-link fs-5">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link text-uppercase fs-5">
                  LOGIN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Nav>
  );
};
export default Navbar;
