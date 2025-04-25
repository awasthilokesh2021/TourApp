import React from 'react'

import { useNavigate } from "react-router-dom";

const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tours/${tour._id}`); // Open full tour details
  };

  return (
    <div className="rounded-lg shadow-lg overflow-hidden border hover:shadow-xl transition">
      <img src={tour.image} alt={tour.title} className="w-full h-60 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-bold">{tour.title}</h3>
        <p className="text-sm text-gray-600">{tour.duration} days</p>
        <p className="text-lg text-green-700 font-semibold mt-1">₹{tour.price} (-{tour.discount}% Off)</p>

        <button
          onClick={handleClick}
          className="mt-4 bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default TourCard;
