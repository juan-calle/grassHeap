import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <Link className="NavLink" to="/">
        grassHeap 🌱
      </Link>
      <Link className="NavLink" to="/plants/all">
        Browse Plants 🥕
      </Link>
    </div>
  );
}

export default Navbar;
