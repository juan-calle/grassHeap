import React, { useEffect , useState } from 'react';
import { getAllPlants } from '../../../services/GrowStuffApiServices';
import { getMyPlants, saveToMyPlants } from '../../../services/ServerApiServices';
import PlantItem from '../PlantItem/PlantItem';
import './PlantList.css'


function PlantList () {
  const [ plants, setPlants ] = useState([]);
  const [ myPlants, setMyPlants ] = useState([]);

  useEffect(()=>{
    // make request to GrowStuff API for all crops
    getAllPlants().then(plants=>setPlants(plants)
    );
    getMyPlants().then(myplants => setMyPlants(myplants))
  },[])


  const plantsDisplay = plants.map((plant, i) => {
    const inMyPlants = myPlants.some(myPlant => myPlant.name === plant.slug);
    return (
      <PlantItem key={i} inMyPlants={inMyPlants} plant={plant}></PlantItem>
    )
  })

  return (
    <div className="PlantList">
      {plantsDisplay}
    </div>
  )
}

export default PlantList;
