import React from "react";

export default function CheckAvailabilityCTA() {
  return (
    <section className="bg-[#f4f4f2] py-16 px-6 text-center">
      <h3 className="text-3xl font-bold text-moyo-dark mb-4">
        Ready to move in?
      </h3>
      <p className="text-lg text-gray-700 mb-6">
        Secure your spot at Moyo Hostel and experience premium student living in
        Hamburg.
      </p>
      <a href="/booking">
        <button className="bg-moyo-dark text-white px-6 py-3 rounded font-semibold hover:bg-[#3b4a36] transition">
          Check Availability
        </button>
      </a>
    </section>
  );
}
