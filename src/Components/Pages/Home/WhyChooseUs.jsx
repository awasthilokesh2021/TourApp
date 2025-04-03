import React from 'react'

import { FaDollarSign, FaHeadset, FaCheckCircle, FaGlobe } from "react-icons/fa";

const benefits = [
  { icon: <FaDollarSign />, title: "Best Price Guarantee", description: "We offer unbeatable prices on the best tours and packages." },
  { icon: <FaHeadset />, title: "24/7 Customer Support", description: "Our support team is available anytime to assist you." },
  { icon: <FaCheckCircle />, title: "Verified & Trusted", description: "All our tours are verified to ensure the best experience." },
  { icon: <FaGlobe />, title: "500+ Destinations", description: "Explore the most beautiful places around the world." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
        <p className="text-gray-600 mt-2">We provide the best travel services to make your journey memorable</p>
      </div>

      {/* Benefits Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
            <div className="text-4xl text-blue-600 mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
            <p className="text-gray-600 text-center mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
