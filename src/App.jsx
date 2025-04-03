import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TourList from './Components/Pages/TourDetails/TourList';
import Nav from './Components/Navbar/Nav';
import Home from './Components/Pages/Home/Home';
import Tourcard from './Components/Pages/TourDetails/Tourcard';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<TourList />} />
      </Routes>
    </Router>
  )
}

export default App