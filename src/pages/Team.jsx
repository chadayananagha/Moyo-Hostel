import React from "react";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";
import { FiUsers } from "react-icons/fi";

export default function Team() {
  return (
    <PageWrapper>
      <Section>
        <div className="max-w-4xl mx-auto animate-fadeIn">
          <h2 className="text-3xl font-bold text-center text-moyo-dark mb-6 flex items-center justify-center gap-2">
            <FiUsers /> Meet the Host Team
          </h2>
          <div className="bg-white rounded shadow p-6 text-lg leading-relaxed text-moyo-dark space-y-6">
            <p>
              Moyo Hostel is run by a small, dedicated team who care deeply
              about student well-being. We’re not landlords or agents — we’re
              hosts, mentors, and problem-solvers.
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>Building Manager:</strong> Oversees maintenance, safety,
                and daily operations
              </li>
              <li>
                <strong>Resident Support:</strong> Helps students settle in and
                navigate life in Hamburg
              </li>
              <li>
                <strong>Catering Partner:</strong> Prepares fresh Indian meals
                daily
              </li>
            </ul>
            <p>
              Our team is here to make sure you feel at home from your first day
              to your final exam.
            </p>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
