import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function Amenities() {
  const items = ["Laundry", "Wi-Fi", "Community Kitchen", "Study Spaces"];

  return (
    <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 text-moyo-dark animate-fadeIn">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 flex items-center justify-center gap-2">
        <FiCheckCircle /> Amenities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-full sm:max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition"
          >
            <span className="text-base sm:text-lg font-semibold text-moyo-dark">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
