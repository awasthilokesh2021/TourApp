import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://tour-backend-zsgx.onrender.com/api/auth/signup", formData, {
        withCredentials: true, 
      });

      console.log("✅ Signup Response:", res.data);

      if (res.data) {
        alert("✅ Signup Successful!");
        navigate("/login");
      }
    } catch (err) {
       console.error("❌ Signup Error:", err.response?.data?.error || err.message);
       alert(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
          <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Sign Up</button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;




