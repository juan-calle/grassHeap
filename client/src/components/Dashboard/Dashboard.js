import Tasks from "../Tasks/Tasks/Tasks";
import React from "react";
import Weather from "../Weather/Weather";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <Weather />
      <Tasks />
      {/* <img
        className="daisies"
        src="https://uploads-ssl.webflow.com/5ea82bf973106e1765b18a5f/5fd0d4198fecb12496f3bbdb_tumbs-up-4_1.gif"
        alt="swaying daisies"
      ></img> */}
    </div>
  );
}

export default Dashboard;
