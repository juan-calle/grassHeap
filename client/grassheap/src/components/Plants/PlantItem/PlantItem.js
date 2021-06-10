import React from 'react';
import './PlantItem.css';

function PlantItem({plant, savePlant}){
  return (
  <div>
    <button onClick={()=>savePlant({name: plant.slug, plantID: plant.id})}>add {plant.name} to myPlants</button>
    <h2>{plant.name}</h2>
    <h4>{plant.scientific_name}</h4>
    <img className="plantImage" src={plant.thumbnail_url}/>
  </div>
  )
}

export default PlantItem;
