import { Link } from 'react-router-dom'
import './Home.css'
import React, { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="nav">
          <div className="nav1">
            <img src="/logo.png" alt="" />
             <h1 className="md:text-3xl font-semibold">करिअर अकॅडमी</h1>
          </div>
          <div className="nav2">
             <button>📍 Solapur</button>
             <button onClick={() => window.location.href = "tel:9011412026"}>CALL📞 +91 9011415250</button>
          </div>
      </div>
     <ul>
        <li><Link to="/"></Link></li>
        <li><Link to="/Courses">Courses</Link></li>
        <li><Link to="/Toppers">Toppers</Link></li>
        <li><Link to="/Gallery">Gallery</Link></li>
        <li><Link to="/Latest">Latest</Link></li>
        <li><Link to="/Scolarship">Scolarship</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      
       <div className="nav-menu-bottom"> 
           <div className="home-tab">
                <Link to={"/"}>
                  <div className="tab-icon">
                    <svg xmlns="http://www.w3.org/2000/svg"height={35} viewBox="0 0 24 24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>
                  </div>
                <div className="tab-label">Home</div>
                </Link>
           </div>
           <div className="courses-tab">
            <Link to={"/Courses"}>
                <div className="tab-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height={35} viewBox="0 0 24 24" fill="currentColor"><path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H14C14.5523 21 15 20.5523 15 20V15.2973L15.9995 19.9996C16.1143 20.5398 16.6454 20.8847 17.1856 20.7699L21.0982 19.9382C21.6384 19.8234 21.9832 19.2924 21.8684 18.7522L18.9576 5.0581C18.8428 4.51788 18.3118 4.17304 17.7716 4.28786L14.9927 4.87853C14.9328 4.38353 14.5112 4 14 4H10C10 3.44772 9.55228 3 9 3H4ZM10 6H13V14H10V6ZM10 19V16H13V19H10ZM8 5V15H5V5H8ZM8 17V19H5V17H8ZM17.3321 16.6496L19.2884 16.2338L19.7042 18.1898L17.7479 18.6057L17.3321 16.6496ZM16.9163 14.6933L15.253 6.86789L17.2092 6.45207L18.8726 14.2775L16.9163 14.6933Z"></path></svg>
                </div>
                <div className="tab-label">Courses</div>
            </Link>
           </div>
            <div className="contact-tab">
              <Link to="/Contact">
                <div className="tab-icon">
                  <svg xmlns="http://www.w3.org/2000/svg"height={35} viewBox="0 0 24 24" fill="currentColor"><path d="M20 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H19ZM5 16.1707C5.31278 16.0602 5.64936 16 6 16H19V4H6C5.44772 4 5 4.44772 5 5V16.1707ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14H9Z"></path></svg>
                </div>
                <div className="tab-label">Contact</div>
              </Link>
           </div>
           <div className="menu-tab" onClick={() => setMenuOpen(true)}>
                <div className="menu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height={35} viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                </div>
                <div className="tab-label">Menu</div>
           </div>
           {menuOpen && (
  <div className="full-menu">
    <div className="menu-header">
      <h2>Menu</h2>
      <button className="close-btn" onClick={() => setMenuOpen(false)}>
        ✖
      </button>
    </div>

    <ul className="menu-list">
      <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
      <li><Link to="/Courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
      <li><Link to="/Toppers" onClick={() => setMenuOpen(false)}>Toppers</Link></li>
      <li><Link to="/Gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
      <li><Link to="/Latest" onClick={() => setMenuOpen(false)}>Latest</Link></li>
      <li><Link to="/Scolarship" onClick={() => setMenuOpen(false)}>Scholarship</Link></li>
      <li><Link to="/About" onClick={() => setMenuOpen(false)}>About</Link></li>
      <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
    </ul>
  </div>
)}

       </div>
    {/*  Carousal   
      <div className="card">
  <img src="temp1.jpg" alt="" />
  <h3 className="card-text center">
    Welcome to JAY HIND CAREER ACADEMY, India’s Best Residential Training
    Academy for Maharashtra Police, Agniveer, Army, Navy, Air Force, BSF,
    CISF Entrance Preparation — with Full Physical Training.
  </h3>
  <button onClick={() => window.open("https://wa.me/919011412026", "_blank")}>
  🟢Chat with Us
</button>

</div> */}

    </div>
  );
}
