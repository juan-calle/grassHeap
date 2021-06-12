import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPlantByName } from "../../../services/GrowStuffApiServices";

function PlantDetails() {
  const { name } = useParams();
  const [plantDetails, setPlantDetails] = useState({});
  useEffect(() => {
    getPlantByName(name).then((details) => setPlantDetails(details));
  }, []);

  const commonNames = plantDetails.openfarm_data.attributes.common_names.map(
    (name, i) => (
      <div key={i} className="PlantDetails__commonNames">
        <span>{name}</span>
      </div>
    )
  );

  return (
    <div className="PlantDetails">
      <h1>{plantDetails.name}</h1>
      {commonNames}
      <img src={plantDetails.svg_icon} />
      <p>{plantDetails.openfarm_data.attributes.description}</p>
    </div>
  );
}

export default PlantDetails;
