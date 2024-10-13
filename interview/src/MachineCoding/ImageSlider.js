import React, { useEffect, useState } from "react";

const data = [
  {
    id: "54321",
    title: "Majestic Mountains",
    url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  },
  {
    id: "12345",
    title: "Sunset Over the Ocean",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: "67890",
    title: "Forest Path",
    url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  },
  {
    id: "98765",
    title: "City Skyline",
    url: "https://images.unsplash.com/photo-1494783367193-149034c05e8f",
  },
  {
    id: "43210",
    title: "Desert Dunes",
    url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
  },
];
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((previous) => (previous + 1) % data.length);
  };
  const handlePrevious = () => {
    setCurrentIndex((previous) => (previous - 1) % data.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div>
      <h1>Image Slider</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button onClick={handlePrevious}>PRE</button>
        <div>
          <img
            src={data[currentIndex].url}
            width={300}
            height={400}
            alt="not found"
          />
          <h3>{data[currentIndex].title}</h3>
        </div>
        <button onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
};

export default ImageSlider;
