import type { Metadata } from "next";
import { RoutePage } from "@/components/templates/route-page";
import { PageScenarios } from "@/components/sections/page-scenarios";
import { PageVehicles } from "@/components/sections/page-vehicles";
import { PageCallout } from "@/components/sections/page-callout";
import {
  canmoreContent,
  canmoreScenarios,
  allRoutePaths,
} from "@/lib/content/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Calgary to Canmore Private Transportation",
  description:
    "Schedule private, pre-scheduled transportation from Calgary to Canmore, Alberta through the PrimeKar app. Premium vehicles, planned in advance.",
  path: canmoreContent.path,
});

export default function CanmorePage() {
  return (
    <RoutePage content={canmoreContent} builtRoutePaths={allRoutePaths}>
      <PageScenarios
        id="scenarios-heading"
        eyebrow="Planning ahead"
        heading="How a Calgary to Canmore Trip Is Scheduled"
        subheading="A Calgary to Canmore trip is scheduled in advance through the app, so pickup and drop-off details are set before you travel."
        tone="base"
        items={canmoreScenarios}
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
        body="Mountain highway conditions between Calgary and Canmore can change seasonally. PrimeKar does not control road, weather or park conditions."
        sourceLabel="Check Alberta 511 highway conditions"
        sourceHref="https://511.alberta.ca/"
        tone="base"
      />
    </RoutePage>
  );
}
