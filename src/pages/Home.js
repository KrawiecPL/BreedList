import { useEffect, useState } from "react";
import Dog from "../components/Dog";
import Button from "../components/Button";
import "../styles/Home.css";

const Home = () => {
  const [breedsArr, setBreedsArr] = useState([]);
  const [breedsIdArr, setBreedsIdArr] = useState([]);
  const [count, setCount] = useState(10);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/list/all", true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        const breedsArray = Object.entries(response.message);

        const Breeds = breedsArray
          .map(([breed, subBreeds]) => {
            if (subBreeds.length === 0) {
              return breed;
            } else {
              return subBreeds.map((subBreed) => `${subBreed} ${breed}`);
            }
          })
          .flat();
        const BreedsId = breedsArray
          .map(([breed, subBreeds]) => {
            if (subBreeds.length === 0) {
              return breed;
            } else {
              return subBreeds.map((subBreed) => `${breed}/${subBreed}`);
            }
          })
          .flat();
        setBreedsArr(Breeds);
        setBreedsIdArr(BreedsId);
      }
    };
    xhr.send();
  });

  const handleClick = () => {
    let newCount = count + 5;
    if (newCount > breedsArr.length) {
      newCount = breedsArr.length;
    }
    setCount(newCount);
  };

  const dogs = breedsArr
    .slice(0, count)
    .map((breed, index) => (
      <Dog key={breedsIdArr[index]} id={breedsIdArr[index]} breed={breed} />
    ));
  return (
    <div className="breedsList">
      <h1>Breed list</h1>
      <ul>{dogs}</ul>
      {count >= breedsArr.length ? undefined : (
        <Button click={handleClick} content="Load more" />
      )}
    </div>
  );
};

export default Home;
