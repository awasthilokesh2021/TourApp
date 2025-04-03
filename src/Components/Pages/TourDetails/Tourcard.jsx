import React from 'react'

const Tourcard = ({tour}) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
    <img src={tour.image} alt={tour.title} className="w-full h-40 object-cover" />
    <h2 className="text-xl font-semibold mt-2">{tour.title}</h2>
    <p className="text-gray-600">₹{tour.price}</p>
  </div>
  )
}

export default Tourcard