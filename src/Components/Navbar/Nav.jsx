import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes,FaSearch } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-400  z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white drop-shadow-md">TravelGo</Link>

        {/* Search Bar */}
        {/* <div className="hidden md:flex items-center bg-white px-3 py-2 rounded-full shadow-md">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="outline-none text-black w-48"
        />
          <button className="text-gray-500 hover:text-blue-600">
            <FaSearch />
          </button>
        </div> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-white hover:text-yellow-400">Home</Link></li>
          <li><Link to="/tours" className="text-white hover:text-yellow-400">Tours</Link></li>
          <li><Link to="/about" className="text-white hover:text-yellow-400">About</Link></li>
          <li><Link to="/contact" className="text-white hover:text-yellow-400">Contact</Link></li>
          <li><Link to="/login" className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600">Login</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl text-white">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
     
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-black/80 text-center p-4 space-y-3 absolute top-16 left-0 w-full">
          <li><Link to="/" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/tours" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Tours</Link></li>
          <li><Link to="/about" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/login" className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600" onClick={() => setMenuOpen(false)}>Login</Link></li>
        </ul>
      )}
    </nav>
  );
};


export default Nav;

