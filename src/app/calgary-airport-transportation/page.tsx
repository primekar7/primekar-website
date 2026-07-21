import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/service-page";
import { PageScenarios } from "@/components/sections/page-scenarios";
import { PageVehicles } from "@/components/sections/page-vehicles";
import { airportContent, airportScenarios } from "@/lib/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Calgary Airport Transportation (YYC)",
  description:
    "Schedule Calgary International Airport (YYC) pickup or drop-off in advance through the PrimeKar app. Premium pre-scheduled transportation — not an on-demand or dispatch service.",
  path: airportContent.path,
});

export default function AirportPage() {
  return (
    <ServicePage content={airportContent}>
      <PageScenarios
        id="scenarios-heading"
        eyebrow="Planning ahead"
        heading="Airport Trips Built Around Your Schedule"
        subheading="Every PrimeKar airport trip is scheduled ahead of time and managed in the app — not requested on demand."
        tone="base"
        items={airportScenarios}
      />
      <PageVehicles
        id="fleet-heading"
        heading="Vehicles for Airport Transportation"
        tone="elevated"
      />
    </ServicePage>
  );
}
