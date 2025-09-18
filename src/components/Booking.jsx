import React, { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-[#f4f4f2] min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-moyo-dark mb-6">
          Book Your Stay at Moyo Hostel
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          We're excited to welcome you! While online booking is coming soon, you
          can reserve your spot by contacting us directly.
        </p>

        {/* Room Info */}
        <div className="bg-white rounded shadow p-6 mb-10 text-left">
          <h2 className="text-2xl font-semibold text-center text-moyo-dark mb-4">
            Room Options
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Premium Rooms — Fully furnished, shared bathrooms</li>
            <li>16 students per floor with community kitchen access</li>
            <li>Daily Indian meals included</li>
            <li>High-speed Wi-Fi, laundry, and maintenance</li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded shadow p-6 text-left mb-10">
          <h2 className="text-2xl font-semibold text-center text-moyo-dark mb-4">
            How to Book
          </h2>
          <p className="text-gray-700 mb-4">
            To check availability or reserve a room, please email us:
          </p>
          <p className="text-lg font-medium text-moyo-dark">
            📧{" "}
            <a href="mailto:moyo.hostel@support.com" className="underline">
              moyo.hostel@support.com
            </a>
          </p>
          <p className="text-gray-600 mt-4 text-sm italic">
            We'll respond within 24 hours with availability and next steps.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded shadow p-6 text-left">
          <h2 className="text-2xl font-semibold text-center text-moyo-dark mb-4">
            Or Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-moyo-dark"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-moyo-dark"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-moyo-dark"
            />
            <button
              type="submit"
              className="bg-moyo-dark text-white px-6 py-2 rounded font-semibold hover:bg-[#3b4a36] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
