import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import PlantDetails from "../Plants/PlantDetails/PlantDetails";
import PlantList from "../Plants/PlantList/PlantList";
import Navbar from "../NavBar/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/plants" exact component={PlantList} />
          <Route
            path="/details/:name"
            className="PlantList"
            component={PlantDetails}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
