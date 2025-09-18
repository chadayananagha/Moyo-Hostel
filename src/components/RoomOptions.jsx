import React from "react";

export default function RoomOptions() {
  return (
    <section id="rooms" className="px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Room Options</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border rounded p-6 shadow-sm bg-white text-center">
          <h4 className="text-xl font-semibold mb-2">Shared Room</h4>
          <p>Fully furnished with study desk, storage, and shared bathroom.</p>
          <p className="mt-2 font-medium">€450/month</p>
        </div>
        <div className="border rounded p-6 shadow-sm bg-white text-center">
          <h4 className="text-xl font-semibold mb-2">Optional Catering</h4>
          <p>
            Indian meals, 2 per day on weekdays. Cultural comfort and
            convenience.
          </p>
          <p className="mt-2 font-medium">€130/month</p>
        </div>
      </div>
    </section>
  );
}
