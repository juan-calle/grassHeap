import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function PlantDetails({ plants }) {
  const { name } = useParams();
  const [plantDetails, setPlantDetails] = useState({});

  useEffect(() => {
    const plant = plants.find((plant) => plant.slug === name);
    setPlantDetails(plant);
  }, []);

  // const commonNames = plantDetails.details.attributes.common_names.map(
  //   (name, i) => (
  //     <div key={i} className="PlantDetails__commonNames">
  //       <span>{name}</span>
  //     </div>
  //   )
  // );

  return (
    <div className="PlantDetails">
      <h1>{plantDetails.name}</h1>
      {/* {commonNames} */}
      {/* <img src={plantDetails.details.attributes.svg_icon} /> */}
      {/* <p>{plantDetails.details.attributes.description}</p> */}
    </div>
  );
}

export default PlantDetails;
