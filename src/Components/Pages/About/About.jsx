import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full text-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?cs=srgb&dl=pexels-te-lensfix-380994-1371360.jpg&fm=jpg')" }}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center"
        >
          Discover Our Story
        </motion.h1>
      </div>

      {/* Our Mission & Vision */}
      <div className="py-16 px-8 md:px-16 lg:px-32 bg-gray-900">
        <motion.h2 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-center"
        >
          Our Mission & Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg text-gray-300 text-center"
        >
          We aim to make travel effortless and memorable by offering handpicked tours and seamless experiences.
        </motion.p>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 px-8 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-800">
        {['Best Packages', '24/7 Support', 'Exclusive Deals'].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="p-6 bg-gray-700 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="text-gray-300 mt-2">Experience the best travel services with us.</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="py-16 flex justify-center bg-gray-900">
        <motion.a 
          href="/tours" 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-md"
        >
          Explore Tours
        </motion.a>
      </div>
    </div>
  );
};

export default About;
