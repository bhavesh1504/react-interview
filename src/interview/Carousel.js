import React, { useEffect, useState } from "react";

function Carousel() {
  const [images, setImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setImages(data.slice(0, 10)); // Limiting to 10 images for simplicity
    };
    fetching();
  }, []); // Added dependency array to ensure the effect runs only once

  const prevClick = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextClick = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {images.length > 0 ? (
        <>
          <img
            src={images[activeImageIndex].url}
            alt={images[activeImageIndex].title}
            width="300px"
            height="300px"
          />
          <p>{images[activeImageIndex].title}</p>
          <button onClick={prevClick}>Previous</button>
          <button onClick={nextClick}>Next</button>
        </>
      ) : null}
    </div>
  );
}

export default Carousel;
