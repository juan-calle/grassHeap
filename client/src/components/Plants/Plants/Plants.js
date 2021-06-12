import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PlantDetails from "../PlantDetails/PlantDetails";
import PlantList from "../PlantList/PlantList";
import Spinner from "../../Spinner/Spinner";
import {
  getAllPlants,
  getPlantByName,
} from "../../../services/GrowStuffApiServices";
import { getMyPlants } from "../../../services/ServerApiServices";

function Plants() {
  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [loadStatus, setLoadStatus] = useState(false);

  const { name } = useParams();
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
    name === "all" ? (
      <PlantList myPlants={myPlants} plants={plants} />
    ) : (
      <PlantDetails plants={plants} />
    )
  ) : (
    <Spinner />
  );
}

export default Plants;
