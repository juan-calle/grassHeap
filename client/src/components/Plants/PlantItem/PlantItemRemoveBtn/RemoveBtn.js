import React from "react";
function RemoveBtn({ removePlant }) {
  return (
    <button
      className="btn PlantItem__btn PlantItem__remove"
      onClick={removePlant}
    >
      –
    </button>
  );
}

export default RemoveBtn;
