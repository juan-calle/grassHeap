import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  removeFromMyPlants,
  saveToMyPlants,
} from "../../../services/ServerApiServices";
import "./PlantItem.css";

function PlantItem({ plant, inMyPlants }) {
  const [plantOwned, setOwned] = useState(false);

  useEffect(() => {
    setOwned(inMyPlants);
  }, [inMyPlants]);

  function savePlant() {
    setOwned(!plantOwned);
    saveToMyPlants({ name: plant.slug, plantID: plant.id }).then((res) => {
      // eslint-disable-next-line no-console
      console.log(res);
    });
  }

  function removePlant() {
    setOwned(!plantOwned);
    removeFromMyPlants(plant.id).then((res) => {
      // eslint-disable-next-line no-console
      console.log(res);
    });
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
        backgroundImage: `url("${plant.details.attributes.main_image_path}")`,
      }}
    >
      <div className="PlantItem__text">
        <Link className="PlantItem__a" to={`/plants/${plant.slug}`}>
          {plant.name}
        </Link>
        <p className="PlantItem__p">({plant.scientific_name})</p>
        {plantOwned ? removeButton : addButton}
      </div>
    </div>
  );

  return displayPlant;
}

export default PlantItem;
