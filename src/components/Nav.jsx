import React from "react";
import Logo from "../img/logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/">
        <span className="navbar-brand">
          <img className="logo" id="logoHenry" src={Logo} alt="" />
          Weather App
        </span>
      </Link>
      <Link className="navbar-brand" to="/about">
        <span>About</span>
      </Link>
      <SearchBar className="navbar-brand" onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
