import React, { useState ,useEffect} from "react";
import axios from "axios";

const ManageTours = () => {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const res = await axios.get("https://tour-backend-zsgx.onrender.com/api/tours");
      setTours(res.data);
    } catch (error) {
      console.error("Failed to fetch tours:", error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this tour?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://tour-backend-1-78hr.onrender.com/api/tours/delete-tour/${id}`, { withCredentials: true });
      setTours(tours.filter((tour) => tour._id !== id));
    } catch (error) {
      console.error("Failed to delete:", error);
      alert("Delete failed!");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Tours</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Duration</th>
              <th className="py-2 px-4 border">Discount</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour._id} className="text-center">
                <td className="py-2 px-4 border">{tour.title}</td>
                <td className="py-2 px-4 border">{tour.price}</td>
                <td className="py-2 px-4 border">{tour.duration}</td>
                <td className="py-2 px-4 border">{tour.discount}</td>
                <td className="py-2 px-4 border space-x-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() => handleDelete(tour._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {tours.length === 0 && (
              <tr>
                <td colSpan="5" className="py-4 text-gray-500 text-center">
                  No tours available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTours;
