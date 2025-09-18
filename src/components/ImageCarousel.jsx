import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import premiumRoom from "../assets/premium-room.jpeg";
import communityKitchen from "../assets/community-kitchen.jpeg";
import amenities from "../assets/amenities.jpeg";

export default function ImageCarousel() {
  return (
    <section className="py-12 px-6 bg-[#f4f4f2]">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={600}
        className="max-w-5xl mx-auto rounded overflow-hidden shadow-md"
      >
        {/* Premium Rooms */}
        <div className="flex flex-col sm:flex-row items-center bg-white p-6 gap-6">
          <img
            src={premiumRoom}
            alt="Premium Rooms"
            className="w-full sm:w-1/2 rounded shadow"
          />
          <div className="sm:w-1/2 text-left">
            <h3 className="text-xl font-semibold mb-2 text-moyo-dark">
              Premium Rooms
            </h3>
            <p className="text-gray-700 text-base">
              Fully furnished, 16 students per floor, shared bathrooms. Designed
              for comfort and connection.
            </p>
          </div>
        </div>

        {/* Community Kitchens */}
        <div className="flex flex-col sm:flex-row items-center bg-white p-6 gap-6">
          <img
            src={communityKitchen}
            alt="Community Kitchens"
            className="w-full sm:w-1/2 rounded shadow"
          />
          <div className="sm:w-1/2 text-left">
            <h3 className="text-xl font-semibold mb-2 text-moyo-dark">
              Community Kitchens
            </h3>
            <p className="text-gray-700 text-base">
              Ground floor equipped kitchens that foster daily interactions and
              shared meals.
            </p>
          </div>
        </div>

        {/* Full Amenities */}
        <div className="flex flex-col sm:flex-row items-center bg-white p-6 gap-6">
          <img
            src={amenities}
            alt="Full Amenities"
            className="w-full sm:w-1/2 rounded shadow"
          />
          <div className="sm:w-1/2 text-left">
            <h3 className="text-xl font-semibold mb-2 text-moyo-dark">
              Full Amenities
            </h3>
            <p className="text-gray-700 text-base">
              Laundry, drying facilities, and daily maintenance included —
              everything you need for hassle-free living.
            </p>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
