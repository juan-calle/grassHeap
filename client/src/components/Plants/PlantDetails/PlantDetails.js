import React from "react";
import { useParams } from "react-router";

function PlantDetails() {
  const { name } = useParams();

  return <h1>details {name}</h1>;
}

export default PlantDetails;
