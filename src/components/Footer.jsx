import React from "react";

export default function Footer() {
  return (
    <footer className="bg-moyo-dark text-moyo-light py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
