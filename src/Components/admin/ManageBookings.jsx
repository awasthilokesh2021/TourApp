import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("https://tour-backend-zsgx.onrender.com/api/bookings/bookings", { withCredentials: true });
        console.log(res," all bookings");
      setBookings(res.data);
    } catch (err) {
      console.error("Failed to fetch bookings:", err);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this booking?");
    if (!confirm) return;

    try {
      await axios.delete(`https://tour-backend-zsgx.onrender.com/api/bookings/bookings/${id}`, { withCredentials: true });
      setBookings(bookings.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Failed to delete booking:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Bookings</h2>
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">User</th>
            <th className="p-2 border">Tour</th>
            <th className="p-2 border">Guests</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id} className="text-center">
              <td className="p-2 border">{b.user?.name}</td>
              <td className="p-2 border">{b.tour?.title}</td>
              <td className="p-2 border">{b.travelers}</td>
              <td className="p-2 border">{new Date(b.date).toLocaleDateString()}</td>
              <td className="p-2 border">{b.status}</td>
              <td className="p-2 border">
                <button onClick={() => handleDelete(b._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {bookings.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center text-gray-500 py-4">No bookings available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookings;

