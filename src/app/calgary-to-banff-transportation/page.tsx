import type { Metadata } from "next";
import { RoutePage } from "@/components/templates/route-page";
import { PageScenarios } from "@/components/sections/page-scenarios";
import { PageVehicles } from "@/components/sections/page-vehicles";
import { PageCallout } from "@/components/sections/page-callout";
import {
  banffContent,
  banffScenarios,
  allRoutePaths,
} from "@/lib/content/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Calgary to Banff Private Transportation",
  description:
    "Schedule private, pre-scheduled transportation from Calgary to Banff, Alberta through the PrimeKar app. Premium vehicles, planned in advance — not an on-demand service.",
  path: banffContent.path,
});

// Route-page template (docs/component-map.md — RoutePage; Blueprint p30
// field list). No distance, drive time, pricing, or road/weather condition
// is stated (v7 §7, §23) — docs/content-sources.md records that no
// destination research has been done yet. Seasonal guidance points to the
// official Alberta 511 service by name instead of asserting a condition.
export default function BanffPage() {
  return (
    <RoutePage content={banffContent} builtRoutePaths={allRoutePaths}>
      <PageScenarios
        id="scenarios-heading"
        eyebrow="Planning ahead"
        heading="How a Calgary to Banff Trip Is Scheduled"
        subheading="A Calgary to Banff trip is scheduled in advance through the app, so pickup and drop-off details are set before you travel."
        tone="base"
        items={banffScenarios}
      />
      <PageVehicles
        id="fleet-heading"
        heading="Vehicles for This Route"
        tone="elevated"
      />
      <PageCallout
        id="seasonal-heading"
        eyebrow="Good to know"
        heading="Seasonal and Road Conditions"
        body="Mountain highway conditions between Calgary and Banff can change seasonally. PrimeKar does not control road, weather or park conditions."
        sourceLabel="Check Alberta 511 highway conditions"
        sourceHref="https://511.alberta.ca/"
        tone="base"
      />
    </RoutePage>
  );
}
