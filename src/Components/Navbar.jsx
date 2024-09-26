import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <div className="nav-logo">
          <a src="#">
            <img
              src="https://envocode.com/wp-content/uploads/2024/01/envocodelogo-1.png"
              alt="logo"
            />
          </a>
        </div>

        <div className="nav-elements">
          <div className="nav-links">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>

              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <button className="nav-search-icon" type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-search">
          <button className="nav-button">Start Project</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
