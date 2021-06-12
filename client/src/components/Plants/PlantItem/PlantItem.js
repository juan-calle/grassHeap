import React, { useEffect, useState } from "react";
import { getPlantByName } from "../../../services/GrowStuffApiServices";
import {
  removeFromMyPlants,
  saveToMyPlants,
} from "../../../services/ServerApiServices";
import "./PlantItem.css";

function PlantItem({ plant, inMyPlants }) {
  const [detailsAvailable, setDetailsFlag] = useState(false);
  const [plantOwned, setOwned] = useState(false);

  useEffect(() => {
    setOwned(inMyPlants);
  }, [inMyPlants]);

  function savePlant() {
    setOwned(!plantOwned);
    saveToMyPlants({ name: plant.slug, plantID: plant.id }).then((res) =>
      console.log(res)
    );
  }

  function removePlant() {
    setOwned(!plantOwned);
    removeFromMyPlants(plant.id).then((res) => console.log(res));
  }

  const removeButton = (
    <button
      className="btn PlantItem__btn PlantItem__remove"
      onClick={removePlant}
    >
      remove {plant.name} from myPlants
    </button>
  );

  const addButton = (
    <button className="btn PlantItem__btn PlantItem__save" onClick={savePlant}>
      save {plant.name} to myPlants
    </button>
  );
  const displayPlant = (
    <div
      className="plantItem"
      style={{
        backgroundImage: `url("${plant.thumbnail_url}")`,
      }}
    >
      <div className="PlantItem__text">
        <a className="PlantItem__a" href={`/details/${plant.slug}`}>
          {plant.name}
        </a>
        <p className="PlantItem__p">({plant.scientific_name})</p>
        {plantOwned ? removeButton : addButton}
      </div>
    </div>
  );

  return displayPlant;
}

export default PlantItem;
