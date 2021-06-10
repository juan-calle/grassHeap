import React from 'react';
import './PlantItem.css';

function PlantItem({plant}){
  return (
  <div>
    <h2>{plant.name}</h2>
    <h4>{plant.scientific_name}</h4>
    <img className="plantImage" src={plant.thumbnail_url}/>
  </div>
  )
}

export default PlantItem;
