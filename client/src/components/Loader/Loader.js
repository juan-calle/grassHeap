import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="App__loading">
      <h3>Loading DOM trees and DOM vegetables...</h3>
      <img
        className="daisies"
        src="https://uploads-ssl.webflow.com/5ea82bf973106e1765b18a5f/5fd0d4198fecb12496f3bbdb_tumbs-up-4_1.gif"
        alt="swaying daisies"
      ></img>
    </div>
  );
}
export default Loader;
