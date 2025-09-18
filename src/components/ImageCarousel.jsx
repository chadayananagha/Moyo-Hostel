import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import premiumRoom from "../assets/premium-room.jpeg";
import communityKitchen from "../assets/community-kitchen.jpeg";
import amenities from "../assets/amenities.jpeg";

export default function ImageCarousel() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 py-12 sm:py-16 text-moyo-dark animate-fadeIn rounded-lg">
      <div className="max-w-full sm:max-w-5xl mx-auto rounded-lg shadow-md overflow-hidden">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          transitionTime={600}
        >
          {/* Premium Rooms */}
          <div className="flex flex-col sm:flex-row items-center bg-white p-4 sm:p-6 gap-6">
            <div className="w-full sm:w-1/2 h-64 sm:h-72 overflow-hidden flex items-center justify-center rounded-lg shadow-md">
              <img
                src={premiumRoom}
                alt="Premium Rooms"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="sm:w-1/2 text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-moyo-dark">
                Premium Rooms
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Fully furnished, 16 students per floor, shared bathrooms.
                Designed for comfort and connection.
              </p>
            </div>
          </div>

          {/* Community Kitchens */}
          <div className="flex flex-col sm:flex-row items-center bg-white p-4 sm:p-6 gap-6">
            <div className="w-full sm:w-1/2 h-64 sm:h-72 overflow-hidden flex items-center justify-center rounded-lg shadow-md">
              <img
                src={communityKitchen}
                alt="Community Kitchens"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="sm:w-1/2 text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-moyo-dark">
                Community Kitchens
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Ground floor equipped kitchens that foster daily interactions
                and shared meals.
              </p>
            </div>
          </div>

          {/* Full Amenities */}
          <div className="flex flex-col sm:flex-row items-center bg-white p-4 sm:p-6 gap-6">
            <div className="w-full sm:w-1/2 h-64 sm:h-72 overflow-hidden flex items-center justify-center rounded-lg shadow-md">
              <img
                src={amenities}
                alt="Full Amenities"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="sm:w-1/2 text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-moyo-dark">
                Full Amenities
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Laundry, drying facilities, and daily maintenance included —
                everything you need for hassle-free living.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
