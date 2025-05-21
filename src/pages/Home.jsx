import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cards from "./Cards";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cardRef = useRef(null);

  React.useEffect(() => {
    if (location.state?.scrollTo === "services" && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="home-wrapper">
      <section className="hero-section">
        <div className="hero-overlay flex">
          <div className="hero-content">
            <div className="heroimg flex justify-between items-center px-6 py-8">
              <div className="w-1/2 text-left pr-6">
                <h2 className="text-4xl font-bold font-serif mb-4 text-gray-800">
                  Smarter Insurance Decisions with AI
                </h2>
                <p className="text-lg font-medium font-sans text-gray-700 leading-relaxed">
                  Empower your insurance journey with our intelligent tools for summarizing, comparing, and understanding policies.
                </p>
              </div>
              <div className="w-1/2 flex justify-end">
                <img src="/images/fintech.jpg" alt="Insurance" className="img1" />
              </div>
            </div>

            {/* 👇 Ref here */}
            <div ref={cardRef}>
              <Cards />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
