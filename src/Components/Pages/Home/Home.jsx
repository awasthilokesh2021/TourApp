import React from "react";
import { Suspense, lazy } from "react";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";


const PopularDestinations = lazy(() => import("./PopularDestinations"));
const FeaturedTours = lazy(() => import("./FeaturedTours"));
const WhyChooseUs = lazy(() => import("./WhyChooseUs"));
const Testimonials = lazy(() => import("./Testimonials"));
const TravelBlog = lazy(() => import("./TravelBlog"));
const Footer = lazy(() => import("./Footer"));

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
  return (
    <div>
      <HeroSection />

      <Suspense fallback={
    <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-white z-50 text-3xl font-semibold">
      Loading...
    </div>
  }>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <PopularDestinations />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <FeaturedTours />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <WhyChooseUs />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Testimonials />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <TravelBlog />
        </motion.div>

        <Footer />
      </Suspense>
    </div>
  );
};


export default Home;

