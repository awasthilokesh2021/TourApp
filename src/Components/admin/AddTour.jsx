import React from "react";
import { useState } from "react";
import axios from "axios";

const AddTour = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    duration: "",
    image: "",
    discount: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post(
        "https://tour-backend-1-78hr.onrender.com/api/admin/add-tour",  // ✅ Your protected admin route
        formData,
        {
          withCredentials: true, // ✅ Send cookie (token) with request
        }
      );
  
      console.log("Tour Add", res.data);
      
      alert("Tour Added Successfully!");
  
      // Reset form
      setFormData({
        title: "",
        price: "",
        duration: "",
        image: "",
        discount: "",
        description: "",
      });
    } catch (error) {
      console.error("❌ Error adding tour:", error.response?.data || error.message);
      alert("Failed to add tour!");
    }
  };
  

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Add New Tour</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded-md grid grid-cols-2 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Tour Title"
          className="border p-2 rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price (₹)"
          className="border p-2 rounded"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g. 5 Days)"
          className="border p-2 rounded"
          value={formData.duration}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="discount"
          placeholder="Discount %"
          className="border p-2 rounded"
          value={formData.discount}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="border p-2 rounded col-span-2"
          value={formData.image}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Tour Description"
          rows="4"
          className="border p-2 rounded col-span-2"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 cursor-pointer px-4 rounded hover:bg-blue-700 col-span-2"
        >
          Submit Tour
        </button>
      </form>
    </div>
  );
};

export default AddTour;
