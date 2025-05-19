import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { clearUser } from "../redux/authSlice"; // 🔄 Update path if needed

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("https://tour-backend-zsgx.onrender.com/api/auth/logout", {
        withCredentials: true,
      });
      dispatch(clearUser());
      navigate("/");
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  const getFormattedName = (name) => (name ? name.charAt(0).toUpperCase() : "");

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out shadow-sm ${
        hasScrolled
          ? "bg-gradient-to-r from-yellow-100 to-white border-b border-yellow-200"
          : "bg-gradient-to-r from-yellow-50 to-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* ✅ Logo */}
        <NavLink to="/" className="text-2xl font-extrabold text-yellow-600">
          TravelGo
        </NavLink>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-semibold">
          <li>
            <NavLink to="/" className="hover:text-yellow-500">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tours" className="hover:text-yellow-500">
              Tours
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-yellow-500">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-yellow-500">
              Contact
            </NavLink>
          </li>

          {!user && (
            <li>
              <NavLink to="/login" className="text-green-600 font-semibold">
                Login
              </NavLink>
            </li>
          )}

          {user && user?.role === "admin" && (
            <li>
              <button
                onClick={() => navigate("/admin/dashboard")}
                className="text-yellow-600 font-bold"
              >
                Admin Panel
              </button>
            </li>
          )}
        </ul>

        {/* ✅ Right Side Icons */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-10 cursor-pointer"
              >
                <span className="border rounded-full px-3 py-1 bg-yellow-100 text-yellow-700 font-bold">
                  {getFormattedName(user.name)}
                </span>
              </button>

              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-32 text-sm">
                  <li className="p-2 hover:bg-gray-100">
                    <NavLink
                      to="/my-bookings"
                      onClick={() => setDropdownOpen(false)}
                    >
                      MyBookings
                    </NavLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className="text-2xl text-gray-600 hover:text-yellow-500"
            >
              <FaUserCircle />
            </NavLink>
          )}

          {/* ✅ Hamburger Menu */}
          <button
            className="md:hidden text-2xl text-yellow-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-yellow-100 p-4 text-yellow-800 text-sm mt-2 shadow-inner"
          >
            <ul className="space-y-3 text-center">
              <li>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/tours" onClick={() => setMenuOpen(false)}>
                  Tours
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </NavLink>
              </li>

              {!user && (
                <li>
                  <NavLink
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="font-semibold"
                  >
                    Login
                  </NavLink>
                </li>
              )}

              {user && user?.role === "admin" && (
                <li>
                  <button
                    onClick={() => {
                      navigate("/admin/dashboard");
                      setMenuOpen(false);
                    }}
                    className="text-yellow-800 font-bold"
                  >
                    Admin Panel
                  </button>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
