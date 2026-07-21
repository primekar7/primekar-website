import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/service-page";
import { PageScenarios } from "@/components/sections/page-scenarios";
import { PageVehicles } from "@/components/sections/page-vehicles";
import { eventsContent, eventsScenarios } from "@/lib/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Event Transportation in Calgary",
  description:
    "Schedule pre-scheduled transportation around a Calgary event through the PrimeKar app. Planned in advance — not an on-demand service.",
  path: eventsContent.path,
});

export default function EventsPage() {
  return (
    <ServicePage content={eventsContent}>
      <PageScenarios
        id="scenarios-heading"
        eyebrow="Planning ahead"
        heading="Event Trips Scheduled Around Your Plans"
        subheading="Every PrimeKar event trip is scheduled ahead of time and managed in the app — not arranged on the day."
        tone="base"
        items={eventsScenarios}
      />
      <PageVehicles
        id="fleet-heading"
        heading="Vehicles for Events Transportation"
        tone="elevated"
      />
    </ServicePage>
  );
}
