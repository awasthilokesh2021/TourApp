
import React from 'react';
import { NavLink } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-600">🎉 Payment Successful!</h1>
        <p className="mt-4">Your booking has been confirmed. Check your email for details.</p>
        <p className="mt-2">Thank you for choosing us!</p>
        <NavLink to="/">
        <div className="mt-6 inline-block bg-green-500 
        hover:bg-green-600 text-white py-2 px-4 rounded">Go to Home</div>
        </NavLink>
      </div>
    </div>
  );
};

export default PaymentSuccess;
