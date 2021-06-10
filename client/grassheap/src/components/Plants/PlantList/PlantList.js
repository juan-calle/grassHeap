import React, { useEffect , useState } from 'react';
import { getAllPlants } from '../../../services/GrowStuffApiServices';
import { getMyPlants } from '../../../services/ServerApiServices';
import PlantItem from '../PlantItem/PlantItem';
import './PlantList.css'


function PlantList () {
  const [ plants, setPlants ] = useState([]);

  // savePlant({id, name}) {

  // }

  useEffect(()=>{
    getAllPlants().then(plants=>setPlants(plants));
    getMyPlants().then(plants => console.log(plants))
  },[])

  const plantsDisplay = plants.map((plant, i) => {
    return (
      <PlantItem className="plantItem" key={i} plant={plant}></PlantItem>
    )
  })

  return (
    <div>
      {plantsDisplay}
    </div>
  )
}

export default PlantList;
