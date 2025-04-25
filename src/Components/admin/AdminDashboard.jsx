import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTour from "./AddTour";
import ManageTours from "./ManageTours";
import ManageBookings from "./ManageBookings";
import AdminSidebar from "./AdminSidebar ";


const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar/>

      {/* Right side content area */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="add-tour" element={<AddTour />} />
          <Route path="manage-tours" element={<ManageTours />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
