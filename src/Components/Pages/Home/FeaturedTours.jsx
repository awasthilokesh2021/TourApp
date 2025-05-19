import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tours = [
  { title: "Maldives Luxury Tour", price: "₹50,000", duration: "5 Days", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICshL6DSdBqGeDNdaC_f7-auqcmG9HAfkJg&s", discount: "10%" },
  { title: "Dubai Adventure", price: "₹40,000", duration: "4 Days", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICshL6DSdBqGeDNdaC_f7-auqcmG9HAfkJg&s", discount: "15%" },
  { title: "Switzerland Winter Trip", price: "₹70,000", duration: "7 Days", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICshL6DSdBqGeDNdaC_f7-auqcmG9HAfkJg&s", discount: "5%" },
  { title: "Bali Beach Retreat", price: "₹35,000", duration: "6 Days", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICshL6DSdBqGeDNdaC_f7-auqcmG9HAfkJg&s", discount: "12%" },
];

const FeaturedTours = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  return (
    <section id="featured-tours" className=" py-12 bg-white mb-2 ">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Featured Tour Packages</h2>
        <p className="text-gray-600 mt-2">Find the best deals for your next journey</p>
      </div>

      {/* Tours Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {(showAll ? tours : tours.slice(0, 3)).map((tour, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg border">
            {/* Tour Image */}
            <img src={tour.image} alt={tour.title} className="w-full h-60 object-cover transition-transform group-hover:scale-105 duration-300" />
            
            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              {tour.discount} Off
            </div>

            {/* Tour Info */}
            <div className="p-4 text-gray-800">
              <h3 className="text-xl font-semibold">{tour.title}</h3>
              <p className="text-sm text-gray-600">{tour.duration}</p>
              <p className="text-lg font-bold mt-2">{tour.price}</p>
              <button 
               onClick={() => navigate('/contact')}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-6">
        <button onClick={() => setShowAll(!showAll)} className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
          {showAll ? "Show Less" : "View More"}
        </button>
      </div>
    </section>
  );
};

export default FeaturedTours;
