
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingCTA from "./BookingCTA";

const TourDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tours/${id}`);
        setTour(res.data);
      } catch (error) {
        console.error("Error fetching tour", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!tour)  return <p className="text-center text-red-500 mt-10">Tour not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 md:pt-28">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* Left: Tour Image */}
        <div className="w-full md:w-1/2 h-64 md:h-[400px] overflow-hidden rounded-lg shadow-md">
          <img
            src={tour.image || "https://via.placeholder.com/400x300?text=No+Image"}
            alt={tour.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
    
        {/* Right: Info + CTA */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 space-y-3">
            <h2 className="text-3xl font-bold text-blue-700">{tour.title || "No Title"}</h2>
            <p className="text-gray-700">
              <span className="font-semibold">Description:</span> {tour.description || "No description"}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Duration:</span> {tour.duration} days
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Price:</span> ₹{tour.price}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Discount:</span> {tour.discount || 0}%
            </p>
          </div>

          {/* Book Now CTA */}
          <BookingCTA tourId={tour._id} />
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
