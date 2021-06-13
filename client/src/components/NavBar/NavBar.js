import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = months[today.getMonth()];

  return (
    <div className="Navbar">
      <div className="Navbar__appLinks">
        <Link className="NavLink navElement" to="/">
          Dashboard 🌱
        </Link>
        <Link className="NavLink navElement" to="/plants/all">
          Browse Plants 🥕
        </Link>
      </div>

      <input id="toggle1" type="checkbox" />
      <label className="hamburger" htmlFor="toggle1">
        <div className="top"></div>
        <div className="meat"></div>
        <div className="bottom"></div>
      </label>

      <div className="Navbar__externalLinks menu1">
        <span className="dropdown navElement">External Links:</span>
        <a
          className="dropdown NavLink navElement"
          href={`https://www.rhs.org.uk/advice/in-month/${currentMonth}`}
          rel="noreferrer"
          target="_blank"
        >
          RHS 🍀
        </a>
        <a
          className="dropdown NavLink navElement"
          href={`https://www.bbc.co.uk/weather`}
          rel="noreferrer"
          target="_blank"
        >
          BBC Weather ⛅
        </a>
      </div>
    </div>
  );
}

export default Navbar;
