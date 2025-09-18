import React from "react";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <PageWrapper>
      <Section>
        <div className="max-w-4xl mx-auto animate-fadeIn">
          <h2 className="text-3xl font-bold text-center text-moyo-dark mb-6">
            Contact Us
          </h2>
          <div className="bg-white rounded shadow p-6 text-lg leading-relaxed text-moyo-dark space-y-4">
            <p>Need help or have questions? We’re here to support you.</p>
            <p className="flex items-center gap-2">
              <FiMail /> <strong>Email:</strong> moyo.hostel@support.com
            </p>
            <p className="flex items-center gap-2">
              <FiPhone /> <strong>Phone:</strong> Coming Soon
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin /> <strong>Location:</strong> Winsener Str. 64, Hamburg
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto animate-fadeIn delay-200">
          <h2 className="text-3xl font-bold text-center text-moyo-dark mb-6">
            Send Us a Message
          </h2>
          <div className="bg-white rounded shadow p-6">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-moyo-dark transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-moyo-dark transition"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-moyo-dark transition"
              />
              <button
                type="submit"
                className="bg-moyo-dark text-white px-6 py-3 rounded hover:bg-[#3b4a2f] transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
