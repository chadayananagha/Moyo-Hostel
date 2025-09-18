import React from "react";

export default function WhyMoyo() {
  return (
    <section className="text-moyo-dark px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose Moyo</h2>
      <div className="space-y-4 text-base sm:text-lg max-w-3xl mx-auto">
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
