import React from 'react';
import './App.css';
import Dashboard from '../Dashboard/Dashboard'
import PlantList from '../Plants/PlantList/PlantList';

function App() {
  return (
    <div className="App">
      {/* TODO add navbar here */}
      <h1>HELLO PLANTS🌳🌼</h1>
      <PlantList/>
      <Dashboard/>
    </div>
  );
}

export default App;
