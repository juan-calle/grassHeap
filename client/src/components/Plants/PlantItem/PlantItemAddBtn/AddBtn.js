import React from 'react';

function AddButton({ savePlant }) {
  return (
    <button className="btn PlantItem__btn PlantItem__save" onClick={savePlant}>
      +
    </button>
  );
}

export default AddButton;
