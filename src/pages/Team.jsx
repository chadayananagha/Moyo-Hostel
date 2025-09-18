import React from "react";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";

export default function Team() {
  return (
    <PageWrapper>
      <Section title="Meet the Host Team">
        <p className="text-lg leading-relaxed mb-6">
          Moyo Hostel is run by a small, dedicated team who care deeply about
          student well-being. We’re not landlords or agents we’re hosts,
          mentors, and problem-solvers.
        </p>
        <ul className="list-disc list-inside space-y-4 text-moyo-dark mb-6">
          <li>
            <strong>Building Manager:</strong> Oversees maintenance, safety, and
            daily operations
          </li>
          <li>
            <strong>Resident Support:</strong> Helps students settle in and
            navigate life in Hamburg
          </li>
          <li>
            <strong>Catering Partner:</strong> Prepares fresh Indian meals daily
          </li>
        </ul>
        <p className="text-lg leading-relaxed">
          Our team is here to make sure you feel at home from your first day to
          your final exam.
        </p>
      </Section>
    </PageWrapper>
  );
}
