import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import Navbar from "../NavBar/NavBar";
import Plants from "../Plants/Plants/Plants";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/plants/:name" component={Plants}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
