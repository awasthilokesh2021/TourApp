import React from 'react'

import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Top 10 Beach Destinations in 2025",
    image: "https://images.pexels.com/photos/939729/pexels-photo-939729.jpeg?cs=srgb&dl=pexels-ajaybhargavguduru-939729.jpg&fm=jpg",
    category: "Adventure",
    excerpt: "Explore the most breathtaking beaches you must visit in 2025.",
  },
  {
    id: 2,
    title: "Best Budget-Friendly Travel Tips",
    image: "https://media.istockphoto.com/id/618545122/photo/travel-cost.jpg?s=612x612&w=0&k=20&c=Ko8yFZ0hPgLstUHXuwfs9dGchTsOGHMOi193cfx6Qw4=",
    category: "Budget Travel",
    excerpt: "Save money while traveling with these expert budget tips.",
  },
  {
    id: 3,
    title: "Solo Travel: A Complete Guide",
    image: "https://images.unsplash.com/photo-1605274280779-a4732e176f4b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sbyUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Solo Travel",
    excerpt: "Everything you need to know about traveling alone confidently.",
  },
];

const TravelBlog = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Latest Travel Blogs</h2>
        <p className="text-gray-600 mt-2">Get expert travel tips, guides, and destination insights</p>
      </div>

      {/* Blogs Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-52 object-cover" />
            <div className="p-4">
              <span className="text-sm text-blue-600 font-semibold">{blog.category}</span>
              <h3 className="text-xl font-bold text-gray-800 mt-2">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.excerpt}</p>
              <Link to={`/blog/${blog.id}`} className="mt-4 inline-block text-blue-600 font-semibold hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelBlog;
