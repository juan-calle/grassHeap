import React, { useContext } from "react";
import { plantsContext } from "../../App/App";
import PlantItem from "../PlantItem/PlantItem";
import "./PlantList.css";

function PlantList() {
  const { plants, myPlants } = useContext(plantsContext);
  const plantsDisplay = plants.map((plant, i) => {
    const inMyPlants = myPlants.some((myPlant) => myPlant.name === plant.slug);
    return (
      <PlantItem key={i} inMyPlants={inMyPlants} plant={plant}></PlantItem>
    );
  });

  return plantsDisplay;
}

export default PlantList;
