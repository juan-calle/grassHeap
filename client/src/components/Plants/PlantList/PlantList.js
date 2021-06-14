import React, { useContext } from "react";
import { plantsContext } from "../../App/App";
import PlantItem from "../PlantItem/PlantItem";
import "./PlantList.css";

function PlantList() {
  const { plants, myPlants } = useContext(plantsContext);

  // useEffect();

  function sortPlants(method = "p") {
    switch (method) {
      case "p":
        break;
      case "a":
        plants.sort();
    }
    return plants;
  }

  const plantsDisplay = plants
    .sort(
      (plant1, plant2) =>
        -plant1.name.toLowerCase().localeCompare(plant2.name.toLowerCase())
    )
    .map((plant, i) => {
      const inMyPlants = myPlants.some(
        (myPlant) => myPlant.name === plant.slug
      );
      return (
        <PlantItem key={i} inMyPlants={inMyPlants} plant={plant}></PlantItem>
      );
    })
    .sort((plant1, plant2) => {
      return plant1.name > plant2.name ? -1 : -1;
    });
  return (
    <div className="PlantList">
      <div className="PlantList__sort">
        --buttons not currently working--
        <button
          className="PlantList__sort--btn"
          onClick={() => sortPlants("p")}
        >
          Sort by Popularity
        </button>
        <button
          className="PlantList__sort--btn"
          onClick={() => sortPlants("a")}
        >
          Sort Alphabetically
        </button>
      </div>
      {plantsDisplay}
    </div>
  );
}

export default PlantList;
