import React from "react";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <PageWrapper>
      {/* Contact Info Section */}
      <Section>
        <div className="max-w-full sm:max-w-4xl mx-auto animate-fadeIn px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-moyo-dark mb-6">
            Contact Us
          </h2>
          <div className="bg-white rounded shadow p-4 sm:p-6 text-base sm:text-lg leading-relaxed text-moyo-dark space-y-4">
            <p>Need help or have questions? We’re here to support you.</p>
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center gap-2 flex-nowrap text-sm sm:text-base">
                <FiMail className="shrink-0" />
                <span className="truncate">
                  <strong>Email:</strong>{" "}
                  <span className="break-all">moyo.hostel@support.com</span>
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 flex-nowrap text-sm sm:text-base">
                <FiPhone className="shrink-0" />
                <span>
                  <strong>Phone:</strong> Coming Soon
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 flex-nowrap text-sm sm:text-base">
                <FiMapPin className="shrink-0" />
                <span>
                  <strong>Location:</strong> Winsener Str. 64, Hamburg
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section>
        <div className="max-w-full sm:max-w-4xl mx-auto animate-fadeIn delay-200 px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-moyo-dark mb-6">
            Send Us a Message
          </h2>
          <div className="bg-white rounded shadow p-4 sm:p-6">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-moyo-dark transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-moyo-dark transition"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-moyo-dark transition"
              />
              <button
                type="submit"
                className="w-full bg-moyo-dark text-white px-6 py-3 rounded hover:bg-[#3b4a2f] transition font-semibold text-sm sm:text-base"
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
