import React, { useEffect, useState } from "react";
import './carousal.css';

const Carousel = () => {
  const images = [
    "/temp1.jpg",
    "/temp2.jpg",
    "/temp3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden ">
      <img
        src={images[currentIndex]}
        className="w-full h-130 "
        alt="carousel"
      />  
        <div className="carousaltxt absolute inset-0  flex flex-col justify-center items-center text-center text-white -translate-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">
          Welcome to JAY HIND CAREER ACADEMY
        </h1>
        <p className="text-sm md:text-base max-w-xl">
          India’s Best Residential Training Academy for Maharashtra Police,
          Agniveer, Army, Navy, Air Force & SSC with complete physical
          and written preparation.
        </p>

        {/* <button
          onClick={() => window.open("https://wa.me/919011412026", "_blank")}
          className="mt-4 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-semibold"
        >
          🟢 Chat with Us
        </button> */}
      </div>
    </div>
  );
};

export default Carousel;
