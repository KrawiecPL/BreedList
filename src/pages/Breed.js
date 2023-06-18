import { useParams } from "react-router-dom";
import BreedImg from "../components/BreedImg";

import "../styles/Breed.css";

const Breed = () => {
  const { breed, subbreed } = useParams();
  return (
    <div className="breedImg">
      <h1>
        Breed: {breed} {subbreed}
      </h1>
      <BreedImg breed={breed} subbreed={subbreed} />
    </div>
  );
};

export default Breed;
