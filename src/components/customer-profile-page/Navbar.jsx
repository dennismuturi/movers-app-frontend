import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  // Nav Toggle Functionality
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");
  };

  return (
    <nav className="nav">
      <a href="#" className="logo">
        Movers App
      </a>
      <ul className={active}>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Home
          </a>
        </li>

        <li className="nav_item">
          <a href="#" className="nav_link">
            Relocate Me
          </a>
        </li>

        <li className="nav_item">
          <a href="#" className="nav_link">
            FAQs
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            My Profile
          </a>
        </li>
      </ul>

      {/* Nav Toggler #Hamburger */}
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
