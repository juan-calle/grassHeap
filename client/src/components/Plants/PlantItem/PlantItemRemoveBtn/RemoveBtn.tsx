interface RemoveBtnProps{
  removePlant: () => void;
}

function RemoveBtn ({ removePlant }: RemoveBtnProps): JSX.Element {
  return (
    <button
      className="btn PlantItem__btn PlantItem__remove"
      onClick={removePlant}>
      –
    </button>
  );
}

export default RemoveBtn;
