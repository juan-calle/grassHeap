import React, { useEffect, useState } from "react";
import {
  getAllPlants,
  getPlantByName,
} from "../../../services/GrowStuffApiServices";
import { getMyPlants } from "../../../services/ServerApiServices";
import PlantItem from "../PlantItem/PlantItem";
import Spinner from "../../Spinner/Spinner";
import "./PlantList.css";

function PlantList() {
  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [loadStatus, setLoadStatus] = useState(false);

  useEffect(() => {
    // make request to GrowStuff API for all crops
    getAllPlants().then((plants) => {
      // filter plants by only those which have required details available at their endpoint
      return Promise.all(
        plants.map((plant) => {
          return getPlantByName(plant.slug).then((plantDetails) => {
            const detailsAvailable = !!plantDetails.openfarm_data;
            plant.detailsAvailable = detailsAvailable;
            return plant;
          });
        })
      ).then((plantsAugmented) => {
        const plantsFiltered = plantsAugmented.filter(
          (plant) => plant.detailsAvailable
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

  console.log(myPlants.length, loadStatus);
  const plantsDisplay = plants.map((plant, i) => {
    const inMyPlants = myPlants.some((myPlant) => myPlant.name === plant.slug);
    return (
      <PlantItem key={i} inMyPlants={inMyPlants} plant={plant}></PlantItem>
    );
  });

  return loadStatus ? (
    <div className="PlantList">{plantsDisplay}</div>
  ) : (
    <Spinner />
  );
}

export default PlantList;
