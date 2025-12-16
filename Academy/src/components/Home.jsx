import { Link } from "react-router-dom";
import "./Home.css";
import React, { useState } from "react";
import Carousel from "./carousal";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="nav sticky top-0 z-50">
        <div className="nav1">
          <img src="/logo.png" alt="" />
          <h1 className="md:text-3xl font-semibold">करिअर अकॅडमी</h1>
        </div>
        <div className="nav2">
          <button>📍 Solapur</button>
          <button onClick={() => (window.location.href = "tel:9011412026")}>
            Call +91 9011415250
          </button>
        </div>
      </div>
      <ul className="sticky top-20 z-50">
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/Courses">Courses</Link>
        </li>
        <li>
          <Link to="/Toppers">Toppers</Link>
        </li>
        <li>
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/Latest">Latest</Link>
        </li>
        <li>
          <Link to="/Scolarship">Scolarship</Link>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      <Carousel />

      <div className="nav-menu-bottom">
        <div className="home-tab">
          <Link to={"/"}>
            <div className="tab-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={35}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path>
              </svg>
            </div>
            <div className="tab-label">Home</div>
          </Link>
        </div>
        <div className="courses-tab">
          <Link to={"/Courses"}>
            <div className="tab-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={35}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H14C14.5523 21 15 20.5523 15 20V15.2973L15.9995 19.9996C16.1143 20.5398 16.6454 20.8847 17.1856 20.7699L21.0982 19.9382C21.6384 19.8234 21.9832 19.2924 21.8684 18.7522L18.9576 5.0581C18.8428 4.51788 18.3118 4.17304 17.7716 4.28786L14.9927 4.87853C14.9328 4.38353 14.5112 4 14 4H10C10 3.44772 9.55228 3 9 3H4ZM10 6H13V14H10V6ZM10 19V16H13V19H10ZM8 5V15H5V5H8ZM8 17V19H5V17H8ZM17.3321 16.6496L19.2884 16.2338L19.7042 18.1898L17.7479 18.6057L17.3321 16.6496ZM16.9163 14.6933L15.253 6.86789L17.2092 6.45207L18.8726 14.2775L16.9163 14.6933Z"></path>
              </svg>
            </div>
            <div className="tab-label">Courses</div>
          </Link>
        </div>
        <div className="contact-tab">
          <Link to="/Contact">
            <div className="tab-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={35}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H19ZM5 16.1707C5.31278 16.0602 5.64936 16 6 16H19V4H6C5.44772 4 5 4.44772 5 5V16.1707ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14H9Z"></path>
              </svg>
            </div>
            <div className="tab-label">Contact</div>
          </Link>
        </div>
        <div className="menu-tab" onClick={() => setMenuOpen(true)}>
          <div className="menu-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={35}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
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
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Courses" onClick={() => setMenuOpen(false)}>
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/Toppers" onClick={() => setMenuOpen(false)}>
                  Toppers
                </Link>
              </li>
              <li>
                <Link to="/Gallery" onClick={() => setMenuOpen(false)}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/Latest" onClick={() => setMenuOpen(false)}>
                  Latest
                </Link>
              </li>
              <li>
                <Link to="/Scolarship" onClick={() => setMenuOpen(false)}>
                  Scholarship
                </Link>
              </li>
              <li>
                <Link to="/About" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/Contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* news  */}
      <div className="news-bar">
        <span className="news-title">Bulletin Board</span>

        <div className="news-marquee">
          <div className="news-track">
            📢 Maharashtra Police Batch starts 1 August 2025 | 🪖 Agniveer
            Physical Training Ongoing | ✈️ Air Force Exam Form Open | 📝 SSC GD
            New Notification Released
          </div>
        </div>
      </div>

      {/* Popular Courses */}
      <div className="courselist">
        <h1>Popular Courses</h1>
        <div className="cards-container">
          <div className="card">
            <img src="/temp1.jpg" alt="Police Bharti" />
            <div className="card-body">
              <h4>Police Bharti / Police Entrance Exam</h4>
              <p>
                Comprehensive preparation for Maharashtra Police exams including
                physical training, written tests, and personality development.
              </p>
            </div>
          </div>

          <div className="card">
            <img src="/temp2.jpg" alt="Army Bharti" />
            <div className="card-body">
              <h4>Army Bharti / Army Entrance Exam</h4>
              <p>
                Get ready for Army Bharti with guidance on written exams,
                medical tests, and fitness training for successful recruitment.
              </p>
            </div>
          </div>

          <div className="card">
            <img src="/temp3.jpg" alt="SSC GD" />
            <div className="card-body">
              <h4>SSC-GD / SSC-GD Entrance Exam</h4>
              <p>
                Specialized coaching for SSC-GD exams covering technical
                knowledge, aptitude tests, and overall fitness preparation.
              </p>
            </div>
          </div>
        </div>
        <div className="more-info-link">
          <Link to="/Courses" onClick={() => setMenuOpen(false)}>
            ALL COURSES 🡪
          </Link>
        </div>
      </div>

      {/* Champions */}
      <div className="champions">
        <h1>Our Champions</h1>
        <div className="champions-container">
          <div className="champion-card">
            <img src="/topper1.jpg" alt="Champion 1" />
            <div className="champion-info">
              <h4>Avinash Sandhi</h4>
              <p>Indian Army Technical 2023</p>
            </div>
          </div>
          <div className="champion-card">
            <img src="/topper1.jpg" alt="Champion 1" />
            <div className="champion-info">
              <h4>Rahul Sharma</h4>
              <p>Maharashtra Police Topper 2023</p>
            </div>
          </div>
          <div className="champion-card">
            <img src="/topper1.jpg" alt="Champion 1" />
            <div className="champion-info">
              <h4>Rahul Sharma</h4>
              <p>Maharashtra Police Topper 2023</p>
            </div>
          </div>
          <div className="champion-card">
            <img src="/topper1.jpg" alt="Champion 1" />
            <div className="champion-info">
              <h4>Rahul Sharma</h4>
              <p>Maharashtra Police Topper 2023</p>
            </div>
          </div>
        </div>
        <div className="more-info-link">
          <Link to="/Toppers" onClick={() => setMenuOpen(false)}>
            ALL CHAMPIONS 🡪
          </Link>
         </div>
        </div>

        {/* Latest Updates and Industry News */}
        <div className="bg-img2">
  <div className="latestupdate">
    <h1>Latest Updates</h1>
    <div className="updatecard">
      <div className="updatecardImg">
         <img src="temp1.jpg" alt="" />
      </div>
         <p>Police Bharati Classes In Solapur(Machnur)</p>
         <p>🕗 01 Aug 2025</p>
    </div>
  </div>

  <div className="industrynews">
    <h1>Industry News</h1>
    <div>
      <div className="Industrycard">
        <img src="insta.png" alt="" />
        <div className="instatxt">
        <h1>Instagram Official Page of JAY HIND CAREER ACADEMY Best Indian Army Physical Academy In Maharashtra</h1>
        <div className="instalink">
          <a href="https://www.instagram.com/">OPEN LINK 🡪</a>
        </div>
        </div>
      </div>
      <div className="Industrycard">
        <img src="ut.png" alt="" />
        <div className="instatxt">
        <h1>YouTube Official Page of JAY HIND CAREER ACADEMY Best Indian Army Physical Academy In Maharashtra</h1>
        <div className="instalink">
          <a href="https://www.youtube.com/@shingaresirscareeracademyb2443">OPEN LINK 🡪</a>
        </div>
        </div>
      </div>
      <div className="Industrycard">
        <img src="fb.png" alt="" />
        <div className="instatxt">
        <h1>Facebook Official Page of JAY HIND CAREER ACADEMY Best Indian Army Physical Academy In Maharashtra</h1>
        <div className="instalink">
          <a href="https://www.facebook.com/">OPEN LINK 🡪</a>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>

  





    </div>
  );
}
