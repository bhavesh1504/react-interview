import React, { useState } from "react";

function Image() {
  const images = [
    {
      title: "Data Scientist",
      url: "https://cdn.pixabay.com/photo/2022/01/17/22/20/add-6945894_640.png",
    },
    {
      title: "scenery",
      url: "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772240_640.png",
    },
    {
      title: "Anamata",
      url: "https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_640.jpg",
    },
    {
      title: "last data",
      url: "https://cdn.pixabay.com/photo/2013/03/01/18/40/crispus-87928_640.jpg",
    },
  ];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const prev = () => {
    if (activeImageIndex === 0) {
      setActiveImageIndex(images.length - 1);
    } else {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };
  const next = () => {
    if (images.length - 1 === activeImageIndex) {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };
  return (
    <div>
      <img
        src={images[activeImageIndex].url}
        alt={images[activeImageIndex].title}
        width="100px"
        height="100px"
      />
      <p>{images[activeImageIndex].title}</p>
      <span onClick={prev}>Previous </span>
      <span onClick={next}>Next </span>
    </div>
  );
}

export default Image;
