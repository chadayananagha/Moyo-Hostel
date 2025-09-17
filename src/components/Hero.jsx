import React from "react";

export default function Hero() {
  return (
    <section className="relative text-center py-24 px-6 bg-gradient-to-br from-moyo-dark to-[#2f3e2c] text-white overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-white/0 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          More Than a Room — A Community
        </h2>
        <p className="text-lg sm:text-xl text-moyo-light italic mb-8">
          Premium rooms, Indian meals, and a vibrant student community
        </p>
        <a href="#rooms">
          <button className="bg-white text-moyo-dark px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">
            Explore Rooms
          </button>
        </a>
      </div>
    </section>
  );
}
