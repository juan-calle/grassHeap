import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Navbar from '../NavBar/NavBar';
import PlantList from '../Plants/PlantList/PlantList';
import PlantDetails from '../Plants/PlantDetails/PlantDetails';
import Loader from '../Loader/Loader';
import {
  getMyPlants,
  removeFromMyPlants,
  saveToMyPlants,
} from '../../services/ServerApiServices';
import {
  getAllPlants,
  getPlantByName,
} from '../../services/GrowStuffApiServices';
import './App.css';

export const plantsContext = createContext(null);
interface Plant {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  name: string;
  description?: string;
  slug: string;
  alternate_names: string[];
  scientific_names: string[];
  photos_count: number;
  plantings_count: number;
  harvests_count: number;
  planters_ids: number[];
  has_photos: boolean;
  thumbnail_url: string;
  scientific_name?: string;
  created_at: number;
  id: string;
}

interface MyPlant {
  _id?: string;
  name: string;
  plantID: number;
  __v?: number;
}

function App(): JSX.Element {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [myPlants, setMyPlants] = useState<MyPlant[]>([]);
  const [loadStatus, setLoadStatus] = useState<boolean>(false);

  function savePlant(plant: Plant): void {
    const newPlant: MyPlant = { name: plant.slug, plantID: parseInt(plant.id) };
    try {
      saveToMyPlants(newPlant);
      setMyPlants((oldList: MyPlant[]) => [...oldList, newPlant]);
    } catch (err) {
      console.log(err);
    }
  }

  function removePlant(plantID: number): void {
    removeFromMyPlants(plantID);
    // const myPlantsCopy = myPlants.filter((plant) => plant.plantID !== plantID);
    setMyPlants((oldPlants : MyPlant[]) =>
      oldPlants.filter((plant: MyPlant) => plant.plantID !== plantID),
    );
  }

  useEffect(() => {
    // make request to GrowStuff API /crops endpoint for all crops
    getAllPlants().then((plants: any[]) => {
      return Promise.all(
        plants.map((plant: any) => {
          // for each plant, make request to GrowStuff API /crops/:plant endpoint
          return getPlantByName(plant.slug).then(plantDetails => {
            const details = plantDetails.openfarm_data;
            // add details proeprty to each plant object
            plant.details = details;
            return plant;
          });
        }),
      ).then(plantsAugmented => {
        // filter plants by only those which have required details available at their endpoint
        const plantsFiltered: any = plantsAugmented.filter(
          (plant: any) => !!plant.details,
        );
        console.log(plantsFiltered);
        setPlants(plantsFiltered);
      });
    });
  }, []);

  useEffect(() => {
    getMyPlants().then(myplants => setMyPlants(myplants));
  }, []);

  useEffect(() => {
    if (plants.length) {
      setLoadStatus(true);
    }
  }, [myPlants, plants]);

  return loadStatus ? (
    <div className="App">
      <plantsContext.Provider
        value={{ myPlants, plants, removePlant, savePlant }}>
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
