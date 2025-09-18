import React from "react";
import { FiHeart } from "react-icons/fi";

export default function WhyMoyo() {
  return (
    <section className="text-moyo-dark px-4 sm:px-6 md:px-8 py-12 sm:py-16 animate-fadeIn">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 flex items-center justify-center gap-2">
        <span className="hidden sm:inline">
          <FiHeart className="shrink-0" />
        </span>
        Why Moyo Feels Like Home
      </h2>
      <div className="max-w-full sm:max-w-3xl mx-auto bg-white rounded shadow p-4 sm:p-6 text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
        <p>
          Moyo Hostel is designed specifically for international students,
          especially from India. We offer a safe, welcoming space with optional
          Indian catering, community events, and support from a friendly host
          team.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Fully managed building</li>
          <li>Walkable to top universities</li>
          <li>Indian meals available</li>
          <li>Supportive host team</li>
        </ul>
      </div>
    </section>
  );
}
