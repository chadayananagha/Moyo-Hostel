import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";
import { FiLogIn } from "react-icons/fi";

export default function Login() {
  return (
    <PageWrapper>
      <Section>
        <div className="max-w-md mx-auto animate-fadeIn">
          <h2 className="text-3xl font-bold text-center text-moyo-dark mb-6 flex items-center justify-center gap-2">
            <FiLogIn /> Login to Moyo Hostel
          </h2>
          <div className="bg-white rounded shadow p-6">
            <form className="space-y-6">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-moyo-dark transition"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-moyo-dark transition"
              />
              <button
                type="submit"
                className="bg-moyo-dark text-white px-6 py-3 rounded w-full hover:bg-[#3b4a2f] transition font-semibold"
              >
                Login
              </button>
            </form>
            <p className="mt-6 text-center text-sm">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-moyo-dark font-medium underline hover:text-[#3b4a2f]"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
