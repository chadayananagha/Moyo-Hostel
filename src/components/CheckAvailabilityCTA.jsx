import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

export default function CheckAvailabilityCTA() {
  return (
    <section className="text-moyo-dark px-4 sm:px-6 md:px-8 py-12 sm:py-16 animate-fadeIn delay-200">
      <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 flex items-center justify-center gap-2">
        <span className="hidden sm:inline">
          <FiArrowRightCircle className="shrink-0" />
        </span>
        Ready to move in?
      </h3>

      <div className="max-w-full sm:max-w-3xl mx-auto bg-white rounded shadow p-4 sm:p-6 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 text-center">
        <p className="text-gray-700">
          Secure your spot at Moyo Hostel and experience premium student living
          in Hamburg.
        </p>
        <a href="/booking">
          <button className="mt-4 bg-moyo-dark text-white px-6 py-3 rounded font-semibold hover:bg-[#3b4a36] transition">
            Check Availability
          </button>
        </a>
      </div>
    </section>
  );
}
