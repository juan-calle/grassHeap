import React, { useEffect , useState } from 'react';
import { getAllPlants } from '../../../services/GrowStuffApiServices';
import { getMyPlants, saveToMyPlants } from '../../../services/ServerApiServices';
import PlantItem from '../PlantItem/PlantItem';
import './PlantList.css'


function PlantList () {
  const [ plants, setPlants ] = useState([]);

  function savePlant(plant={}) {
    return saveToMyPlants(plant);
  }

  useEffect(()=>{
    getAllPlants().then(plants=>setPlants(plants));
    getMyPlants().then(myplants => console.log(myplants))
  },[])

  const plantsDisplay = plants.map((plant, i) => {
    return (
      <PlantItem className="plantItem" key={i} savePlant={savePlant} plant={plant}></PlantItem>
    )
  })

  return (
    <div>
      {plantsDisplay}
    </div>
  )
}

export default PlantList;
