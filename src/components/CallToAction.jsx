import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="text-center py-16 px-6 bg-moyo-light">
      <h3 className="text-xl font-semibold mb-4">Ready to move in?</h3>
      <p className="mb-4">Already have an account?</p>
      <Link to="/login">
        <button className="bg-moyo-dark text-white px-5 py-2 rounded hover:bg-[#3b4a2f]">
          Login
        </button>
      </Link>
    </section>
  );
}
