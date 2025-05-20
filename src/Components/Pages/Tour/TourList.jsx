import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";
import TourCard from "./TourCard";

const TourList = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios.get("https://tour-backend-1-78hr.onrender.com/api/tours") // Get all tours
      .then(res => setTours(res.data))
      .catch(err => console.error("Error loading tours", err));
  }, []);

  return (
    <section className="py-10 mt-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">All Tour Packages</h2>

      {tours.length === 0 ? (
        <p className="text-center text-gray-500">No tours available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tours.map(tour => (
            <TourCard key={tour._id} tour={tour} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TourList;
