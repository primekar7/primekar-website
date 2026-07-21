import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/service-page";
import { PageScenarios } from "@/components/sections/page-scenarios";
import { PageVehicles } from "@/components/sections/page-vehicles";
import {
  earlyMorningContent,
  earlyMorningScenarios,
} from "@/lib/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Early-Morning Airport Transportation Calgary",
  description:
    "Schedule an early-morning Calgary Airport (YYC) pickup in advance through the PrimeKar app. Planned the night before — not an on-demand service.",
  path: earlyMorningContent.path,
});

export default function EarlyMorningPage() {
  return (
    <ServicePage content={earlyMorningContent}>
      <PageScenarios
        id="scenarios-heading"
        eyebrow="Planning ahead"
        heading="Early Departures Planned the Night Before"
        subheading="Every PrimeKar early-morning trip is scheduled ahead of time and managed in the app — not arranged on the morning itself."
        tone="base"
        items={earlyMorningScenarios}
      />
      <PageVehicles
        id="fleet-heading"
        heading="Vehicles for Early-Morning Transportation"
        tone="elevated"
      />
    </ServicePage>
  );
}
