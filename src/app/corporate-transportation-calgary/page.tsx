import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/service-page";
import { PageScenarios } from "@/components/sections/page-scenarios";
import { PageVehicles } from "@/components/sections/page-vehicles";
import { corporateContent, corporateScenarios } from "@/lib/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Corporate Transportation in Calgary",
  description:
    "Coordinate scheduled transportation for your organization in Calgary through PrimeKar. Pre-scheduled, planned in advance — not an on-demand service.",
  path: corporateContent.path,
});

export default function CorporatePage() {
  return (
    <ServicePage content={corporateContent}>
      <PageScenarios
        id="scenarios-heading"
        eyebrow="Planning ahead"
        heading="Corporate Trips Coordinated in Advance"
        subheading="PrimeKar corporate trips are scheduled ahead of time — coordinated directly with PrimeKar for organization-specific needs."
        tone="base"
        items={corporateScenarios}
      />
      <PageVehicles
        id="fleet-heading"
        heading="Vehicles for Corporate Transportation"
        tone="elevated"
      />
    </ServicePage>
  );
}
