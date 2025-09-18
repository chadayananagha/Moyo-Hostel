import React from "react";
import { FiHome, FiCoffee } from "react-icons/fi";

export default function RoomOptions() {
  return (
    <section
      id="rooms"
      className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 text-moyo-dark animate-fadeIn"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 flex items-center justify-center gap-2">
        <FiHome /> Room Options
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-full sm:max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition">
          <h4 className="text-lg sm:text-xl font-semibold mb-2">Shared Room</h4>
          <p className="text-gray-700 text-sm sm:text-base">
            Fully furnished with study desk, storage, and shared bathroom.
          </p>
          <p className="mt-4 text-moyo-dark font-semibold text-base sm:text-lg">
            €450/month
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition">
          <h4 className="text-lg sm:text-xl font-semibold mb-2">
            Optional Catering
          </h4>
          <p className="text-gray-700 text-sm sm:text-base">
            Indian meals, 2 per day on weekdays. Cultural comfort and
            convenience.
          </p>
          <p className="mt-4 text-moyo-dark font-semibold text-base sm:text-lg">
            €130/month
          </p>
        </div>
      </div>
    </section>
  );
}
