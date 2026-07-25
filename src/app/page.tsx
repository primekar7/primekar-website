import { Header } from "@/components/chrome/header";
import { Footer } from "@/components/chrome/footer";
import { Hero } from "@/components/sections/hero";
import { ServiceFamilies } from "@/components/sections/service-families";
import { WhyPreScheduled } from "@/components/sections/why-pre-scheduled";
import { HowItWorks } from "@/components/sections/how-it-works";
import { AppExperience } from "@/components/sections/app-experience";
import { AirportFeature } from "@/components/sections/airport-feature";
import { AlbertaRoutes } from "@/components/sections/alberta-routes";
import { CorporateFeature } from "@/components/sections/corporate-feature";
import { Fleet } from "@/components/sections/fleet";
import { Reliability } from "@/components/sections/reliability";
import { RideWithPurpose } from "@/components/sections/ride-with-purpose";
import { FinalCta } from "@/components/sections/final-cta";

// Homepage section order follows docs/master-spec-v7.md §18 (16 sections).
// Testimonials is omitted: no verified testimonial content exists yet
// (conditional per §18 — see docs/decision-log.md and the Phase B report).
export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ServiceFamilies />
        <WhyPreScheduled />
        <HowItWorks />
        <AppExperience />
        <AirportFeature />
        <AlbertaRoutes />
        <CorporateFeature />
        <Fleet />
        <Reliability />
        <RideWithPurpose />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
