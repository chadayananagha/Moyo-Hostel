import React from "react";

export default function Amenities() {
  const items = ["Laundry", "Wi-Fi", "Community Kitchen", "Study Spaces"];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white text-moyo-dark border border-gray-200 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition"
          >
            <span className="text-lg font-semibold">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
