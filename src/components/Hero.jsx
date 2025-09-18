import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import your hero background images
import hero1 from "../assets/hero1.jpeg"; // Classroom
import hero2 from "../assets/hero2.jpeg"; // City walk
import hero3 from "../assets/hero3.jpeg"; // Study group
import hero4 from "../assets/hero4.jpeg"; // Building exterior

export default function Hero() {
  const images = [hero1, hero2, hero3, hero4];

  return (
    <section className="relative text-center h-[600px] overflow-hidden">
      {/* Background Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={800}
        swipeable={false}
        showArrows={false}
        className="absolute inset-0 z-0"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="h-[600px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${img})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b4a36]/80 to-[#4b4b4b]/80"></div>
            <div className="absolute inset-0 bg-gradient-radial from-white/5 via-white/0 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </Carousel>

      {/* Fixed Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-3xl mx-auto text-white text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            Premium Living for International Students
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 italic mb-8">
            Fully furnished rooms, Indian meals, and a vibrant student community
            — all under one roof.
          </p>
          <a href="#rooms">
            <button className="bg-white text-moyo-dark px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">
              Explore Rooms
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
