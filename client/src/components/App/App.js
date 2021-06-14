import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import Navbar from "../NavBar/NavBar";
import Plants from "../Plants/Plants/Plants";
import {
  getAllPlants,
  getPlantByName,
} from "../../services/GrowStuffApiServices";
import { getMyPlants } from "../../services/ServerApiServices";

export const plantsContext = createContext(null);

function App() {
  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [loadStatus, setLoadStatus] = useState(false);

  useEffect(() => {
    // make request to GrowStuff API /crops endpoint for all crops
    getAllPlants().then((plants) => {
      return Promise.all(
        plants.map((plant) => {
          // for each plant, make request to GrowStuff API /crops/:plant endpoint
          return getPlantByName(plant.slug).then((plantDetails) => {
            const details = plantDetails.openfarm_data;
            // add detailsAvailable boolean flag to each plant object
            plant.details = details;
            return plant;
          });
        })
      ).then((plantsAugmented) => {
        // filter plants by only those which have required details available at their endpoint
        const plantsFiltered = plantsAugmented.filter(
          (plant) => !!plant.details
        );
        setPlants(plantsFiltered);
      });
    });
  }, []);

  useEffect(() => {
    getMyPlants().then((myplants) => setMyPlants(myplants));
  }, []);

  useEffect(() => {
    if (myPlants.length && plants.length) {
      setLoadStatus(true);
    }
  }, [myPlants, plants]);

  return loadStatus ? (
    <plantsContext.Provider value={{ myPlants, plants }}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/plants" exact component="PlantList" />
            <Route path="/plants/:name" component={Plants}></Route>
          </Switch>
        </div>
      </Router>
    </plantsContext.Provider>
  ) : (
    <img
      className="daisies"
      src="https://uploads-ssl.webflow.com/5ea82bf973106e1765b18a5f/5fd0d4198fecb12496f3bbdb_tumbs-up-4_1.gif"
      alt="swaying daisies"
    ></img>
  );
}

export default App;
