import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiMail, FiInfo, FiUsers, FiX, FiMapPin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-moyo-dark text-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Subheadline */}
        <Link to="/" className="flex items-center space-x-3">
          <FiMapPin className="text-3xl text-white" />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold tracking-wide text-white">
              Moyo Hostel
            </span>
            <span className="text-sm text-moyo-light italic tracking-widest">
              Sleep • Connect • Explore
            </span>
          </div>
        </Link>

        {/* Right side: Login + Hamburger */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="bg-white text-moyo-dark px-4 py-2 rounded font-medium hover:bg-gray-100 transition"
          >
            Login
          </Link>

          {/* Custom Hamburger Icon */}
          <div
            className="space-y-1 cursor-pointer group"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-6 h-0.5 bg-white transition-transform group-hover:translate-x-1"></span>
            <span className="block w-6 h-0.5 bg-white transition-transform group-hover:translate-x-2"></span>
            <span className="block w-6 h-0.5 bg-white transition-transform group-hover:translate-x-1"></span>
          </div>
        </div>
      </div>

      {/* Transparent Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-moyo-dark bg-opacity-90 backdrop-blur-md text-white z-50 shadow-xl"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-2xl hover:text-gray-300"
            >
              <FiX />
            </button>
            <div className="p-6 pt-16 space-y-6">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center space-x-2 hover:text-gray-200"
              >
                <FiHome />
                <span>Home</span>
              </Link>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center space-x-2 hover:text-gray-200"
              >
                <FiMail />
                <span>Contact</span>
              </Link>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="flex items-center space-x-2 hover:text-gray-200"
              >
                <FiInfo />
                <span>About Us</span>
              </Link>
              <Link
                to="/team"
                onClick={() => setMenuOpen(false)}
                className="flex items-center space-x-2 hover:text-gray-200"
              >
                <FiUsers />
                <span>Host Team</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
