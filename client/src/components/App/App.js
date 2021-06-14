import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Navbar from "../NavBar/NavBar";
import PlantList from "../Plants/PlantList/PlantList";
import PlantDetails from "../Plants/PlantDetails/PlantDetails";
import Loader from "../Loader/Loader";
import { getMyPlants } from "../../services/ServerApiServices";
import {
  getAllPlants,
  getPlantByName,
} from "../../services/GrowStuffApiServices";
import "./App.css";

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
    <div className="App">
      <plantsContext.Provider value={{ myPlants, plants }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/plants/:name" component={PlantDetails} />
            <Route exact path="/plants" component={PlantList} />
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </plantsContext.Provider>
    </div>
  ) : (
    <Loader />
  );
}

export default App;
