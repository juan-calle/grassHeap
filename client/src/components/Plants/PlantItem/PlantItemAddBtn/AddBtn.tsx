
interface AddButtonProps {
  savePlant: () => void;
}

function AddButton({ savePlant }: AddButtonProps) : JSX.Element {
  return (
    <button className="btn PlantItem__btn PlantItem__save" onClick={savePlant}>
      +
    </button>
  );
}

export default AddButton;
