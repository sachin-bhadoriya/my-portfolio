import React from "react";
import "../../CSSFile/NavbarCSS/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="laptop-view-nav fixed-top">
        <div className="container main-navbar">
          <div className="main-name bg-transparent">
            <ul>
              <li>SACHIN</li>
              <li>BHADORIYA</li>
            </ul>
          </div>
          <div className="main-links bg-transparent">
            <ul>
              <li><Link className="bg-transparent text-white text-decoration-none navLinks ">Home</Link></li>
              <li><Link className="bg-transparent text-white text-decoration-none navLinks ">Work</Link></li>
              <li><Link className="bg-transparent text-white text-decoration-none navLinks ">Why Us</Link></li>
            </ul>
          </div>
          <div className="contact-btn bg-transparent">
            <button>Contact me</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
