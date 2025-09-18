import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";

export default function Login() {
  return (
    <PageWrapper>
      <Section>
        <h2 className="text-3xl font-bold text-center text-moyo-dark mb-6">
          Login to Moyo Hostel
        </h2>
        <form className="space-y-6 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-4 py-3"
          />
          <button
            type="submit"
            className="bg-moyo-dark text-white px-6 py-3 rounded w-full hover:bg-[#3b4a2f] transition"
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
      </Section>
    </PageWrapper>
  );
}
