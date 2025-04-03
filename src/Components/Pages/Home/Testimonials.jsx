import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amit Sharma",
    image: "/images/user1.jpg",
    rating: 5,
    review: "Amazing experience! The trip was well organized and hassle-free.",
  },
  {
    name: "Aman Verma",
    image: "/images/user2.jpg",
    rating: 4.5,
    review: "Loved the service and the destinations were breathtaking!",
  },
  {
    name: "Rahul Mehta",
    image: "/images/user3.jpg",
    rating: 5,
    review: "One of the best vacations I’ve had. Highly recommended!",
  },
  {
    name: "Rahul Mehta",
    image: "/images/user3.jpg",
    rating: 5,
    review: "One of the best vacations I’ve had. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
        <p className="text-gray-600 mt-2">Real reviews from happy travelers</p>
      </div>

      {/* Swiper Slider */}
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-yellow-500">{"⭐".repeat(Math.round(testimonial.rating))}</p>
                <p className="text-gray-600 mt-2">"{testimonial.review}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
