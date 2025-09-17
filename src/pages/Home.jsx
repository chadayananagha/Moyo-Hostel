import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../components/Hero";
import RoomOptions from "../components/RoomOptions";
import Amenities from "../components/Amenities";
import WhyMoyo from "../components/WhyMoyo";
import CallToAction from "../components/CallToAction";

import Section from "../components/Section";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />

      <Section title="Room Options">
        <RoomOptions />
      </Section>

      <Section title="Amenities">
        <Amenities />
      </Section>

      <Section title="Why Choose Moyo">
        <WhyMoyo />
      </Section>

      <Section>
        <CallToAction />
      </Section>
    </PageWrapper>
  );
}
