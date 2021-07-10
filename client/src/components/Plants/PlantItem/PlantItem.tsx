/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddButton from './PlantItemAddBtn/AddBtn';
import RemoveBtn from './PlantItemRemoveBtn/RemoveBtn';
import './PlantItem.css';
import { plantsContext } from '../../App/App';
import { Plant } from '../../../common/types';

interface PlantItemProps {
  plant: Plant;
  inMyPlants: boolean;
}

function PlantItem({ plant, inMyPlants }: PlantItemProps): JSX.Element {
  const [plantOwned, setOwned] = useState(false);
  useEffect(() => {
    setOwned(inMyPlants);
  }, [inMyPlants]);

  const { savePlant, removePlant } = useContext(plantsContext);

  return (
    <div
      className="plantItem"
      style={{
        backgroundImage: `url("${plant.details.attributes.main_image_path}")`,
      }}>
      <div className="PlantItem__text">
        <Link
          className="PlantItem__a PlantItem__name"
          to={`/plants/${plant.slug}`}>
          {plant.name}
          <img src={`https://www.growstuff.org/crops/${plant.slug}.svg`} />
        </Link>
        <p className="PlantItem__p">{plant.scientific_name}</p>
      </div>
      <div className="PlantItem__btnDiv">
        {plantOwned ? (
          <RemoveBtn
            removePlant={() => {
              removePlant(parseInt(plant.id, 10));
            }}
          />
        ) : (
          <AddButton savePlant={() => savePlant(plant)} />
        )}
      </div>
    </div>
  );
}

export default PlantItem;
