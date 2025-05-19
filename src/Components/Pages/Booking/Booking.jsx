import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadRazorpay } from "../../../utils/loadRazorpay";


const Booking = () => {
  const { tourId } = useParams(); // Get the tourId from the URL
  const [tour, setTour] = useState(null);
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(1);

  const navigate = useNavigate();

  // Fetch the tour details using the tourId
  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tours/${tourId}`);
        setTour(res.data); // Set the fetched tour data
      } catch (err) {
        console.error("Error fetching tour data:", err);
      }
    };

    fetchTour();
  }, [tourId]);

  const handleBooking = async (e) => {
    e.preventDefault();
    const totalPrice = tour?.price * travelers;

    try {
      const res = await axios.post(
        "https://tour-backend-zsgx.onrender.com/api/bookings/create",
        {
          tourId: tour._id,
          date,
          travelers,
          totalPrice,
        },
        { withCredentials: true }
      );
      
      alert("🎉 Booking successful!");

    } catch (err) {
      console.error("Booking failed:", err);
      alert("❌ Booking failed!");
    }
  };

  //handle button click to open Razorpay payment window
  const handlePayment = async () => {
    const res = await loadRazorpay();
  
    const resKey = await axios.get("http://localhost:5000/api/payment/get-key");
    const razorpayKey = resKey.data.key;
  
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
  
    const { data } = await axios.post(
      "http://localhost:5000/api/payment/create-order",
      { amount: tour.price, tourId: tour._id },
      { withCredentials: true }
    );

    const options = {
      key: razorpayKey,
      amount: data.order.amount,
      currency: "INR",
      name: "TravelApp",
      description: "Tour Booking Payment",
      image: "/logo.png",
      order_id: data.order.id,
      handler: async function (response) {
    
        const verifyRes = await axios.post(
          "http://localhost:5000/api/payment/verify",
          {
            response: {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            },
            tourId: tour._id,
            amount: tour.price,
          },
          { withCredentials: true }
        );
      
        if (verifyRes.data.success) {
          alert("🎉 Payment Successful & Booking Confirmed!");
          navigate("/payment-success");
        } else {
          alert("❌ Payment verification failed");
        }
      }
      ,
      prefill: {
        name: "John Doe",
        email: "qwe@qwe",
        contact: "8442060200"
      },
      theme: {
        color: "#3399cc",
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  
  if (!tour) return <p>Loading tour details...</p>;

  return (
    <form onSubmit={handleBooking} className="space-y-4 mt-20 border p-4 rounded-lg shadow">
      <div>
        <label className="block text-sm font-semibold">Date of Travel</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border w-full p-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold">Number of Travelers</label>
        <input
          type="number"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
          min={1}
          className="border w-full p-2 rounded"
          required
        />
      </div>

      <div>
        <p className="font-semibold">Total: ₹{tour.price * travelers}</p>
      </div>

      <button
        type="submit"
        onClick={handlePayment}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Pay & Book Now
      </button>
    </form>
  );
};

export default Booking;

