import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Topbar */}
      <div className="md:hidden bg-gray-900 text-white flex justify-between items-center px-4 py-3 fixed top-0 w-full z-50">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
        <Link to="/">
        <h2 className="text-lg font-semibold">Home</h2>
        </Link>
        
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 min-h-screen w-60 bg-gray-900 text-white p-4 pt-16 transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:pt-12`}
      >
        <h2 className="text-xl font-bold mb-6 mt-4 hidden md:block">Admin Panel</h2>
        <nav className="space-y-4 text-sm md:text-base">
          <Link to="/admin/add-tour" className="block hover:text-yellow-400">
            ➕ Add Tour
          </Link>
          <Link to="/admin/manage-tours" className="block hover:text-yellow-400">
            🗂️ Manage Tours
          </Link>
          <Link to="/admin/manage-bookings" className="block hover:text-yellow-400">
            📋 Manage Bookings
          </Link>
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;

