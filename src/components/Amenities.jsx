import React from "react";

export default function Amenities() {
  const items = ["Laundry", "Wi-Fi", "Community Kitchen", "Study Spaces"];

  return (
    <section className="px-6 py-12 text-moyo-dark">
      <h2 className="text-3xl font-bold text-center mb-6">Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition"
          >
            <span className="text-lg font-semibold">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
