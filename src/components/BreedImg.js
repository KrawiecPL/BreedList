import { useEffect, useState } from "react";

const BreedImg = ({ breed, subbreed }) => {
  const [imgSource, setImgSource] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://dog.ceo/api/breed/${breed}${
        subbreed ? `/${subbreed}` : ""
      }/images/random`,
      true
    );
    xhr.onload = () => {
      if (xhr.status === 200) {
        const imgSrc = JSON.parse(xhr.response).message;
        setImgSource(imgSrc);
        setLoaded(true);
      } else if (xhr.status === 404) {
        setError(true);
        setErrorMessage("Invalid breed!");
      }
    };
    xhr.send();
  }, []);

  let img;
  if (loaded && !error) {
    img = <img src={imgSource} alt="" />;
  } else if (!loaded && !error) {
    img = <p>Loading image...</p>;
  } else if (error) {
    img = <p>{errorMessage}</p>;
  }
  return <>{img}</>;
};

export default BreedImg;
