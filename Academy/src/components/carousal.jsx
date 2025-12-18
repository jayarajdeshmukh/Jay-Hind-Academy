import React, { useEffect, useState } from "react";
import './carousal.css';
import { useNavigate } from "react-router-dom";

const Carousel = () => {
    const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

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

  // inqiery form scroll lock
useEffect(() => {
  if (showForm) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [showForm]);

  return (
    <div className="relative w-full overflow-hidden ">
      <img
        src={images[currentIndex]}
        className="w-full h-130 "
        alt="carousel"/> 

      <div className="carousal absolute inset-0  flex flex-col justify-center items-center text-center text-white -translate-y-2">
       <div className="carousaltxt">
        <h1>
          Welcome to JAY HIND CAREER ACADEMY
        </h1>
        <p className="text-sm md:text-base max-w-xl">
           Maharashtra’s Most Trusted Physical Training Academy, preparing elite
           candidates for Maharashtra Police, Agniveer, Army, Navy, Air Force & SSC
           through complete physical and written training.
        </p>
       </div>
        <div className="banner-content">
          <div className="banner-btn">
             <button onClick={()=>navigate("/upcomingbatch")}>Up-Coming Batches</button>
             <button onClick={()=> setShowForm(true)}>Enquiry</button>
          </div>
          <div className="card">
             <div className="card-text center">
                <h3>MAHARASHTRA POLICE</h3>
                <p>Duration : 365 Days</p>
                <p>Launch Date : 1 August 2025</p>
                <button  onClick={()=>navigate("/upcomingbatch")}>More Info</button>
             </div>
          </div>
        </div>
      </div>
       {/* ================= Enquiry Form Modal ================= */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Enquiry Form</h2>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone Number" />

            <select>
              <option value="">Interested In</option>
              <option>Maharashtra Police</option>
              <option>Agniveer</option>
              <option>Army</option>
              <option>Navy</option>
              <option>Air Force</option>
              <option>SSC</option>
            </select>

            <div className="modal-actions">
              <button className="submit-btn">Submit</button>
              <button className="close-btn" onClick={() => setShowForm(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Carousel;
