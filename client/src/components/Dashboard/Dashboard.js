import Tasks from "../Tasks/Tasks/Tasks";
import React from 'react';
import Weather from "../Weather/Weather";
import './Dashboard.css'

function Dashboard(){
  return (
    <div>
      <Weather/>
      <Tasks/>)
    </div>
  )
}

export default Dashboard;
