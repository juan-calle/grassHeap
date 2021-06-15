import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddButton from "./PlantItemAddBtn/AddBtn";
import RemoveBtn from "./PlantItemRemoveBtn/RemoveBtn";
import "./PlantItem.css";
import { plantsContext } from "../../App/App";

function PlantItem({ plant, inMyPlants }) {
  const [plantOwned, setOwned] = useState(false);
  useEffect(() => {
    setOwned(inMyPlants);
  }, [inMyPlants]);

  const { savePlant, removePlant } = useContext(plantsContext);

  return (
    <div
      className="plantItem"
      style={{
        backgroundImage: `url("${plant.details.attributes.main_image_path}")`,
      }}
    >
      <div className="PlantItem__text">
        <Link
          className="PlantItem__a PlantItem__name"
          to={`/plants/${plant.slug}`}
        >
          {plant.name}
          <img src={plant.details?.attributes?.svg_icon} />
        </Link>
        <p className="PlantItem__p">{plant.scientific_name}</p>
      </div>
      <div className="PlantItem__btnDiv">
        {plantOwned ? (
          <RemoveBtn removePlant={() => removePlant(plant.id)} />
        ) : (
          <AddButton savePlant={() => savePlant(plant)} />
        )}
      </div>
    </div>
  );
}

export default PlantItem;
