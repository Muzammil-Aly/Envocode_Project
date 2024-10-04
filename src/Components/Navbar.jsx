import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery("");
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="nav-logo">
          <Link to="#">
            <img
              src="https://envocode.com/wp-content/uploads/2024/01/envocodelogo-1.png"
              alt="logo"
            />
          </Link>
        </div>

        <div className="nav-elements">
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <button
                  className="nav-search-icon"
                  type="button"
                  onClick={toggleSearchBar}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-search">
          <Link to="/contact">
            <button className="nav-button">Start Project</button>
          </Link>
        </div>

        {isSearchOpen && (
          <div className="search-overlay">
            <div className="search-bar">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button type="button" onClick={toggleSearchBar}>
                  Close
                </button>
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
