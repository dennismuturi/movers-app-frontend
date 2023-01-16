import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="#" className="logo">
        Movers App
      </a>
      <ul className="nav_menu">
        <li className="nav_item">
          <a href="#" className="nav_link">
            Home
          </a>
          <a href="#" className="nav_link">
            Relocate Me
          </a>
          <a href="#" className="nav_link">
            FAQs
          </a>
          <a href="#" className="nav_link">
            My Profile
          </a>
        </li>
      </ul>

      {/* Nav Toggler #Hamburger */}
    </nav>
  );
};

export default Navbar;
