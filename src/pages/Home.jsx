import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../components/Hero";
import ImageCarousel from "../components/ImageCarousel";
import RoomOptions from "../components/RoomOptions";
import Amenities from "../components/Amenities";
import WhyMoyo from "../components/WhyMoyo";
import CallToAction from "../components/CallToAction";
import Section from "../components/Section";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <Hero />

      {/* Carousel Section */}
      <ImageCarousel />

      {/* Room Options */}
      <Section title="Room Options">
        <RoomOptions />
      </Section>

      {/* Amenities */}
      <Section title="Amenities">
        <Amenities />
      </Section>

      {/* Why Moyo */}
      <Section title="Why Choose Moyo">
        <WhyMoyo />
      </Section>

      {/* Call to Action */}
      <Section>
        <CallToAction />
      </Section>
    </PageWrapper>
  );
}
