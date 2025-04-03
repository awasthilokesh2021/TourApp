import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const images = [
  "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1726660605161",
  "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/82/dc/e7.jpg",
  "https://i.pinimg.com/736x/10/49/d0/1049d07a6063c60dedbbac26586d16fc.jpg",
  
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-Slideshow Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Scroll to Next Section
  const scrollToSection = () => {
    document.getElementById("popular-destinations").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen">
      {/* Background Images */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImage]})` }}>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl font-extrabold drop-shadow-md animate-fadeIn">Discover Your Next Adventure</h1>
        <p className="text-lg mt-4 max-w-2xl drop-shadow-md animate-fadeIn">Find the best destinations and tour packages for your next journey.</p>

        {/* Search Bar */}
        <div className="mt-6 flex bg-white text-black rounded-full shadow-md w-full max-w-lg px-4 py-2">
          <input type="text" placeholder="Search destinations..." className="w-full outline-none px-2" />
          <button className="text-blue-600 hover:text-blue-800">
            <FaSearch />
          </button>
        </div>

        {/* CTA Button - Scroll to Next Section */}
        <button onClick={scrollToSection} className="mt-4 bg-yellow-500 cursor-pointer text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
          Explore Tours
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
