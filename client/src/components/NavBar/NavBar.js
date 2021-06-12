import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">grassHeap🌳🌼</Link>
      <Link to="/plants/all">Browse Plants</Link>
    </div>
  );
}

export default Navbar;
