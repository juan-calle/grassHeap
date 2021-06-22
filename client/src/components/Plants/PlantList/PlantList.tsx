import React, { useContext, useEffect } from 'react';
import { plantsContext } from '../../App/App';
import PlantItem from '../PlantItem/PlantItem';
import './PlantList.css';
import { Plant } from '../../../common/types';

function PlantList(): JSX.Element {
  const { plants, myPlants, setPlants } = useContext(plantsContext);
  useEffect(() => {
    displayPlants(plants);
  }, [plants]);


  function sortPlants(method = 'a'): void {
    if (method === 'p') {
      setPlants(prev => {
        const sortedArray = [...prev].sort((plant1, plant2) => {
          return plant1._score < plant2._score ? 1 : -1;
        });
        return sortedArray;
      });
    } else {
      setPlants(prev => {
        const sortedArray = [...prev].sort((plant1, plant2) => {
          return plant1.name.toLowerCase() > plant2.name.toLowerCase() ? 1 : -1;
        });
        return sortedArray;
      });
    }
  }

  function displayPlants(plants: Plant[]): JSX.Element[] {
    return plants.map((plant, i) => {
      const inMyPlants = myPlants.some(myPlant => myPlant.name === plant.slug);
      return (
        <PlantItem key={i} inMyPlants={inMyPlants} plant={plant}></PlantItem>
      );
    });
  }

  return (
    <div className="PlantList">
      <div className="PlantList__sort">
        <p>mind the bugs (and slugs)! buttons not currently working</p>
        <button
          className="PlantList__sort--btn"
          onClick={() => sortPlants('p')}>
          Sort by Popularity
        </button>
        <button
          className="PlantList__sort--btn"
          onClick={() => sortPlants('a')}>
          Sort Alphabetically
        </button>
      </div>
      {plants ? displayPlants(plants) : null}
    </div>
  );
}

export default PlantList;
