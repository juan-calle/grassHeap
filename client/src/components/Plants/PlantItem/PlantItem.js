import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddButton from "./PlantItemAddBtn/AddBtn";
import RemoveBtn from "./PlantItemRemoveBtn/RemoveBtn";
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

  return (
    <div
      className="plantItem"
      style={{
        backgroundImage: `url("${plant.details.attributes.main_image_path}")`,
      }}
    >
      <div className="PlantItem__text">
        <Link className="PlantItem__a" to={`/plants/${plant.slug}`}>
          {plant.name}
          <img src={plant.details?.attributes?.svg_icon} />
        </Link>
        <p className="PlantItem__p">{plant.scientific_name}</p>
      </div>
      <div className="PlantItem__btnDiv">
        {plantOwned ? (
          <RemoveBtn removePlant={removePlant} />
        ) : (
          <AddButton savePlant={savePlant} />
        )}
      </div>
    </div>
  );
}

export default PlantItem;
