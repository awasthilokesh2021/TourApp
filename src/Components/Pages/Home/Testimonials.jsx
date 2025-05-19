import React ,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: '', rating: '', review: '' });

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await axios.get('http://localhost:5000/api/reviews/get');
      setReviews(res.data);
    };
    fetchReviews();
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     const res = await axios.post('https://tour-backend-zsgx.onrender.com/api/reviews/create', formData);
    
    // Add new review to current state
     setReviews(prev => [...prev, res.data]);
     setFormData({ name: '', rating: '', review: '' });

    // console.log("Form data sent:", formData);
     //console.log("Response from backend:", res.data);
   
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
        <p className="text-gray-600 mt-2">Real reviews from happy travelers</p>
      </div>

      {/* Swiper Slider */}
      <div className="container mx-auto px-4 mb-10">
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
          {reviews.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src="/images/default-user.jpg" alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-yellow-500">{"⭐".repeat(Math.round(testimonial.rating))}</p>
                <p className="text-gray-600 mt-2">"{testimonial.review}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Review Form */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Share Your Experience</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-2 border rounded" />
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating (1-5)" min="1" max="5" required className="w-full p-2 border rounded" />
          <textarea name="review" value={formData.review} onChange={handleChange} placeholder="Your Review" required className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit Review</button>
        </form>
      </div>
    </section>
  );
};

export default Testimonials;

