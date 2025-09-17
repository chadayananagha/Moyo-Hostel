import React from "react";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";

export default function About() {
  return (
    <PageWrapper>
      {/* Intro Banner */}
      <section className="text-center py-16 px-6 bg-gradient-to-br from-moyo-dark to-[#2f3e2c] text-white">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
          More Than a Room — A Community
        </h1>
        <p className="text-base sm:text-lg text-moyo-light italic tracking-wide">
          Where international students feel at home, supported, and connected.
        </p>
      </section>

      {/* About Section */}
      <Section title="About Moyo Hostel">
        <p className="text-lg leading-relaxed text-moyo-dark">
          Moyo Hostel is a premium student accommodation in Hamburg, built for
          international students who want comfort, connection, and cultural
          support. We focus on one building — fully managed, community-first,
          and walkable to top universities.
        </p>
      </Section>

      {/* Differentiators */}
      <Section title="What Makes Us Different">
        <ul className="list-disc list-inside space-y-3 text-moyo-dark text-base">
          <li>
            <span className="font-semibold">
              Tailored for international students
            </span>
            , especially from India
          </li>
          <li>
            <span className="font-semibold">Optional Indian catering</span> for
            cultural comfort
          </li>
          <li>
            <span className="font-semibold">Community-first environment</span>{" "}
            that fosters belonging
          </li>
          <li>
            <span className="font-semibold">Supportive host team</span> that
            understands student life
          </li>
        </ul>
      </Section>

      {/* Mission Statement */}
      <Section title="Our Mission">
        <p className="text-lg leading-relaxed text-moyo-dark">
          To create a safe, welcoming space where students from all backgrounds
          feel at home — not just during their stay, but throughout their
          journey.
        </p>
      </Section>
    </PageWrapper>
  );
}
