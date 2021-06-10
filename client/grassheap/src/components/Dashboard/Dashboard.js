import Tasks from "../Tasks/Tasks/Tasks";
import React from 'react';
import Weather from "../Weather/Weather";

function Dashboard(){
  return (
    <div>
      <Weather/>
      <Tasks/>)
    </div>
  )
}

export default Dashboard;
