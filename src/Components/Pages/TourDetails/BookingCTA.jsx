// src/Components/BookingCTA.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BookingCTA = ({ tourId }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate(`/book/${tourId}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-400 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition"
    >
      Book Now
    </button>
  );
};

export default BookingCTA;


