import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiHome, FiMail, FiInfo, FiUsers } from "react-icons/fi";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavAndScroll = (path) => {
    if (location.pathname === path) {
      // Already on the page—just scroll up
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate and let ScrollToTop handle it
      navigate(path);
    }
  };

  return (
    <footer className="bg-moyo-dark text-moyo-light py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand & Tagline */}
        <div>
          <h3 className="text-2xl font-bold tracking-wide mb-2 text-white">
            Moyo Hostel
          </h3>
          <p className="text-sm italic">Sleep • Connect • Explore</p>
          <p className="mt-4 text-xs text-gray-300">
            © 2025 Moyo Hostel | Your Home in Hamburg
          </p>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">Location</h4>
          <p className="text-sm">Winsener Str. 64</p>
          <p className="text-sm">Hamburg, Germany</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <button
                onClick={() => handleNavAndScroll("/")}
                className="flex items-center space-x-2 hover:text-gray-200"
              >
                <FiHome />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavAndScroll("/contact")}
                className="flex items-center space-x-2 hover:text-gray-200"
              >
                <FiMail />
                <span>Contact</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavAndScroll("/about")}
                className="flex items-center space-x-2 hover:text-gray-200"
              >
                <FiInfo />
                <span>About Us</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavAndScroll("/team")}
                className="flex items-center space-x-2 hover:text-gray-200"
              >
                <FiUsers />
                <span>Host Team</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">Contact</h4>
          <p className="text-sm">Phone: Coming Soon</p>
          <p className="text-sm">Email: moyo.hostel@support.com</p>
        </div>
      </div>
    </footer>
  );
}
