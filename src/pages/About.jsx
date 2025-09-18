import React from "react";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";

export default function About() {
  return (
    <PageWrapper>
      {/* Intro Banner */}
      <section className="py-16 px-6 bg-gradient-to-br from-moyo-dark to-[#2f3e2c] text-white">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            More Than a Room — A Community
          </h1>
          <p className="text-base sm:text-lg text-moyo-light italic tracking-wide">
            Where international students feel at home, supported, and connected.
          </p>
        </div>
      </section>

      {/* About Section */}
      <Section>
        <div className="max-w-4xl mx-auto animate-fadeIn">
          <h2 className="text-3xl font-bold text-center text-moyo-dark mb-6">
            About Moyo Hostel
          </h2>
          <div className="bg-white rounded shadow p-6 text-lg leading-relaxed text-moyo-dark">
            <p>
              Moyo Hostel is a premium student accommodation in Hamburg, built
              for international students who want comfort, connection, and
              cultural support. We focus on one building — fully managed,
              community-first, and walkable to top universities.
            </p>
          </div>
        </div>
      </Section>

      {/* Differentiators */}
      <Section>
        <div className="max-w-4xl mx-auto animate-fadeIn delay-200">
          <h2 className="text-3xl font-bold text-center text-moyo-dark mb-6">
            What Makes Us Different
          </h2>
          <div className="bg-white rounded shadow p-6 text-base text-moyo-dark">
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">
                  Tailored for international students
                </span>
                , especially from India
              </li>
              <li>
                <span className="font-semibold">Optional Indian catering</span>{" "}
                for cultural comfort
              </li>
              <li>
                <span className="font-semibold">
                  Community-first environment
                </span>{" "}
                that fosters belonging
              </li>
              <li>
                <span className="font-semibold">Supportive host team</span> that
                understands student life
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Mission Statement */}
      <Section>
        <div className="max-w-4xl mx-auto animate-fadeIn delay-300">
          <h2 className="text-3xl font-bold text-center text-moyo-dark mb-6">
            Our Mission
          </h2>
          <div className="bg-white rounded shadow p-6 text-lg leading-relaxed text-moyo-dark">
            <p>
              To create a safe, welcoming space where students from all
              backgrounds feel at home — not just during their stay, but
              throughout their journey.
            </p>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
