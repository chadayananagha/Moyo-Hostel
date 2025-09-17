import React from "react";

export default function Section({ title, children }) {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 space-y-6 max-w-6xl mx-auto mb-16">
      {title && <h2 className="text-2xl font-bold text-moyo-dark">{title}</h2>}
      {children}
    </section>
  );
}
