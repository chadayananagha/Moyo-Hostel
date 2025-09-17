import React from "react";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";

export default function Contact() {
  return (
    <PageWrapper>
      <Section title="Contact Us">
        <p className="text-lg mb-6">
          Need help or have questions? We’re here to support you.
        </p>
        <div className="space-y-2 text-moyo-dark">
          <p>
            <strong>Email:</strong> moyo.hostel@support.com
          </p>
          <p>
            <strong>Phone:</strong> Coming Soon
          </p>
          <p>
            <strong>Location:</strong> Winsener Str. 64, Hamburg
          </p>
        </div>
      </Section>

      <Section title="Send Us a Message">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-3"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-4 py-3"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 rounded px-4 py-3 resize-none"
          />
          <button
            type="submit"
            className="bg-moyo-dark text-white px-6 py-3 rounded hover:bg-[#3b4a2f] transition"
          >
            Send Message
          </button>
        </form>
      </Section>
    </PageWrapper>
  );
}
