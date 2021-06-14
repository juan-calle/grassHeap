import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { plantsContext } from "../../App/App";

function PlantDetails() {
  const { name } = useParams();
  const { plants, myPlants } = useContext(plantsContext);
  const [plantDetails, setPlantDetails] = useState({});

  useEffect(() => {
    const plant = plants.find((plant) => plant.slug === name);
    setPlantDetails(plant);
  }, [name]);

  const commonNames = plantDetails.details?.attributes?.common_names
    ? plantDetails.details.attributes.common_names.map((name, i) => (
        <div key={i} className="PlantDetails__commonNames">
          <span>{name}</span>
        </div>
      ))
    : null;

  return (
    <div className="PlantDetails">
      <h1>
        {plantDetails.name}
        <img src={plantDetails.details?.attributes?.svg_icon} />
      </h1>
      {commonNames}
      <p>{plantDetails.details.attributes.description}</p>
      <p>{plantDetails.details.attributes.sun_requirements}</p>
      <img src={plantDetails.details.attributes.main_image_path}></img>
    </div>
  );
}

export default PlantDetails;
