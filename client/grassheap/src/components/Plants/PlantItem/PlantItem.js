import React from 'react';
import { removeFromMyPlants, saveToMyPlants } from '../../../services/ServerApiServices';
import './PlantItem.css';

function PlantItem({plant}){

  function savePlant() {
    saveToMyPlants({name: plant.slug, plantID: plant.id}).then(res=>
      console.log(res)
      )
  }


  function removePlant() {
    removeFromMyPlants(plant.id).then(res=>
      console.log(res)
      )
  }

  return (
  <div>
    <button onClick={savePlant}>save {plant.name} to myPlants</button>
    <button onClick={removePlant}>remove {plant.name} from myPlants</button>
    <h2>{plant.name}</h2>
    <h4>{plant.scientific_name}</h4>
    <img className="plantImage" src={plant.thumbnail_url}/>
  </div>
  )
}

export default PlantItem;
