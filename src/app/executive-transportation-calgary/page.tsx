import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/service-page";
import { PageScenarios } from "@/components/sections/page-scenarios";
import { PageVehicles } from "@/components/sections/page-vehicles";
import { executiveContent, executiveScenarios } from "@/lib/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Executive Transportation in Calgary",
  description:
    "Schedule individual executive transportation in Calgary through the PrimeKar app. Pre-scheduled, planned in advance — not an on-demand service.",
  path: executiveContent.path,
});

export default function ExecutivePage() {
  return (
    <ServicePage content={executiveContent}>
      <PageScenarios
        id="scenarios-heading"
        eyebrow="Planning ahead"
        heading="Executive Trips Built Around Your Schedule"
        subheading="Every PrimeKar executive trip is scheduled ahead of time and managed in the app — not requested on demand."
        tone="base"
        items={executiveScenarios}
      />
      <PageVehicles
        id="fleet-heading"
        heading="Vehicles for Executive Transportation"
        tone="elevated"
      />
    </ServicePage>
  );
}
