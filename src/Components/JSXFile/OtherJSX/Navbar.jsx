import React from "react";
import "../../CSSFile/NavbarCSS/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="laptop-view-nav sticky-top">
        <div className="container main-navbar">
          <div className="main-name bg-transparent">
            <ul>
              <li>SACHIN</li>
              <li>BHADORIYA</li>
            </ul>
          </div>
          <div className="main-links bg-transparent">
            <ul>
              <li>Home</li>
              <li>Work</li>
              <li>Why Us</li>
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
