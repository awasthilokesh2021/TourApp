import React from "react";
import { Suspense, lazy } from "react";
import HeroSection from "./HeroSection";


const PopularDestinations = lazy(() => import("./PopularDestinations"));
const FeaturedTours = lazy(() => import("./FeaturedTours"));
const WhyChooseUs = lazy(() => import("./WhyChooseUs"));
const Testimonials = lazy(() => import("./Testimonials"));
const TravelBlog = lazy(() => import("./TravelBlog"));
const Newsletter = lazy(() => import("./Newsletter"));
const Footer = lazy(() => import("./Footer"));

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <PopularDestinations />
        <FeaturedTours />
        <WhyChooseUs />
        <Testimonials />
        <TravelBlog />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;

