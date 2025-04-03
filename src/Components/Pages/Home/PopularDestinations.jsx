import React from 'react'

import { useState } from "react";

const destinations = [
  { name: "Bali, Indonesia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICshL6DSdBqGeDNdaC_f7-auqcmG9HAfkJg&s", rating: 4.8 },
  { name: "Paris, France", image: "https://c4.wallpaperflare.com/wallpaper/56/727/807/road-night-the-city-people-wallpaper-preview.jpg", rating: 4.9 },
  { name: "Maldives", image: "https://wallpapers.com/images/featured/maldives-23wyvlaqa7aydqny.jpg", rating: 4.7 },
  { name: "Switzerland", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBRDrlj3Xkh-LRgieM4k0pSfmIvP1b3L61g&s", rating: 4.9 },
  { name: "Thailand", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStuqsDL7LemlhDFEesNLQzNRKzrqJarIpQug&s", rating: 4.6 },
  { name: "Dubai, UAE", image: "https://w0.peakpx.com/wallpaper/714/882/HD-wallpaper-dubai-marina-2022-city-travel.jpg", rating: 4.8 },
];

const PopularDestinations = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="popular-destinations" className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Popular Destinations</h2>
        <p className="text-gray-600 mt-2">Explore the most beautiful places in the world</p>
      </div>

      {/* Destinations Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {(showAll ? destinations : destinations.slice(0, 3)).map((destination, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover transition-transform group-hover:scale-105 duration-300" />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white">
              <div>
                <h3 className="text-xl font-bold">{destination.name}</h3>
                <p className="text-sm">⭐ {destination.rating} / 5</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-6">
        <button onClick={() => setShowAll(!showAll)} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          {showAll ? "Show Less" : "View More"}
        </button>
      </div>
    </section>
  );
};

export default PopularDestinations;
