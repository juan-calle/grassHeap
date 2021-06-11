import React, { useEffect, useState } from 'react';
import { getPlantByName } from '../../../services/GrowStuffApiServices';
import { removeFromMyPlants, saveToMyPlants } from '../../../services/ServerApiServices';
import './PlantItem.css';

function PlantItem({plant , inMyPlants}){

  const [ detailsAvailable, setDetailsFlag ] = useState(true);
  const [ details, setDetails ] = useState({});
  const [ plantOwned, setOwned ] = useState(false);

  useEffect(()=>{
    getPlantByName(plant.slug).then(plantDetails => {
      // assigns boolean flag to weather further plant details are available from the GS API
      if (plantDetails.openfarm_data === false) setDetailsFlag(false);
      setDetails(plantDetails)
  });
    setOwned(inMyPlants);
  }, [inMyPlants])

  function savePlant() {
    setOwned(!plantOwned);
    saveToMyPlants({name: plant.slug, plantID: plant.id}).then(res=>
      console.log(res)
      )
  }

  function removePlant() {
    setOwned(!plantOwned);
    removeFromMyPlants(plant.id).then(res=>
      console.log(res)
      )
  }

  const removeButton = <button className="btn PlantItem__btn PlantItem__remove" onClick={removePlant}>remove {plant.name} from myPlants</button>

  const addButton = <button className="btn PlantItem__btn PlantItem__save" onClick={savePlant}>save {plant.name} to myPlants</button>

  const displayPlant = (
    <div className="plantItem" style={{
      backgroundImage: `url("${plant.thumbnail_url}")`
    }}>
      {}
      <h4>{plant.name}</h4>
      <p>({plant.scientific_name})</p>
      {plantOwned ? removeButton : addButton}
    </div>
    )

  return detailsAvailable ? displayPlant : null;

}

export default PlantItem;
