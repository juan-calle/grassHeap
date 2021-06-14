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

  return (
    <div className="PlantList">
      <div className="PlantList__sort">
        --buttons not currently working--
        <button className="PlantList__sort--btn">Sort by Popularity</button>
        <button className="PlantList__sort--btn">Sort Alphabetically</button>
      </div>
      {plantsDisplay}
    </div>
  );
}

export default PlantList;
