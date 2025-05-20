import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import loadRazorpay from "../utils/loadRazorpay";

const Booking = () => {
  const { tourId } = useParams();
  const [tour, setTour] = useState(null);
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await axios.get(
          `https://tour-backend-1-78hr.onrender.com/api/tours/${tourId}`
        );
        setTour(res.data);
      } catch (err) {
        console.error("Error fetching tour data:", err);
      }
    };

    fetchTour();
  }, [tourId]);

  const handlePayment = async () => {
    const razorpayLoaded = await loadRazorpay();
    if (!razorpayLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const resKey = await axios.get(
      "https://tour-backend-1-78hr.onrender.com/api/payment/get-key"
    );
    const razorpayKey = resKey.data.key;

    const { data } = await axios.post(
      "https://tour-backend-1-78hr.onrender.com/api/payment/create-order",
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
          "https://tour-backend-1-78hr.onrender.com/api/payment/verify",
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
          const totalPrice = tour.price * travelers;
          await axios.post(
            "https://tour-backend-1-78hr.onrender.com/api/bookings/create",
            {
              tourId: tour._id,
              date,
              travelers,
              totalPrice,
            },
            { withCredentials: true }
          );

          setTimeout(() => {
            navigate("/payment-success");
          }, 100);

        } else {
          alert("❌ Payment verification failed");
        }
      },
      prefill: {
        name: "John Doe",
        email: "test@example.com",
        contact: "1234567890",
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
    <div className="space-y-4 mt-20 border p-4 rounded-lg shadow">
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
        <label className="block text-sm font-semibold">
          Number of Travelers
        </label>
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
        onClick={handlePayment}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Pay & Book Now
      </button>
    </div>
  );
};

export default Booking;
