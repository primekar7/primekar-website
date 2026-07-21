import type { RoutePageContent } from "@/components/templates/route-page";
import { appExperienceAnchor } from "@/lib/content/site";

/**
 * Typed content for RoutePage instances (docs/component-map.md). Same
 * conservative-fact rule as services.ts. Route-specific facts (distance,
 * drive time, road/weather conditions) are never hard-coded — v7 §23
 * requires linking the official live source instead of asserting a
 * condition, and no distance/time research has been done yet
 * (docs/content-sources.md still records "NONE YET RESEARCHED").
 */
export const banffContent: RoutePageContent = {
  path: "/calgary-to-banff-transportation/",
  eyebrow: "Private route",
  h1: "Calgary to Banff Private Transportation",
  subheading:
    "Schedule a private, pre-scheduled trip between Calgary and Banff, Alberta through the PrimeKar app.",
  breadcrumbLabel: "Calgary to Banff Transportation",
  quickFacts: [
    "Calgary to Banff, Alberta",
    "Private, pre-scheduled trip",
    "Scheduled through the app",
    "Executive & Elite XL vehicles",
  ],
  primaryCta: { label: "Download the App", href: `/${appExperienceAnchor}` },
  secondaryCta: { label: "Explore All Routes", href: "/#routes-heading" },
  faqHeading: "Calgary to Banff FAQ",
  faqs: [
    {
      q: "How far in advance should I schedule a Calgary to Banff trip?",
      a: "PrimeKar trips are scheduled in advance through the app. Exact lead-time recommendations are not published — schedule as soon as your plans are confirmed.",
    },
    {
      q: "Can I combine a Banff trip with an airport pickup?",
      a: "PrimeKar offers both Calgary Airport (YYC) transportation and private Alberta routes as separate scheduled trips through the app.",
    },
    {
      q: "Are road conditions to Banff affected by weather?",
      a: "Mountain highway conditions can change seasonally. Check the official Alberta 511 highway-conditions service before you travel.",
    },
    {
      q: "Can I schedule a one-way trip to Banff instead of a round trip?",
      a: "Yes — one-way and round-trip requests are both scheduled the same way, in advance through the app.",
    },
  ],
  finalCta: {
    heading: "Plan Your Trip to Banff",
    subheading:
      "Download the PrimeKar app to schedule your Calgary to Banff trip in advance.",
  },
};

export const banffScenarios = [
  "A one-way pickup from Calgary to Banff, scheduled ahead of your arrival plans",
  "A round trip with a return pickup, arranged in the same app booking",
  "An early departure timed around your own schedule rather than requested on demand",
  "A multi-stop request, planned in advance rather than arranged along the way",
];

export const canmoreContent: RoutePageContent = {
  path: "/calgary-to-canmore-transportation/",
  eyebrow: "Private route",
  h1: "Calgary to Canmore Private Transportation",
  subheading:
    "Schedule a private, pre-scheduled trip between Calgary and Canmore, Alberta through the PrimeKar app.",
  breadcrumbLabel: "Calgary to Canmore Transportation",
  quickFacts: [
    "Calgary to Canmore, Alberta",
    "Private, pre-scheduled trip",
    "Scheduled through the app",
    "Executive & Elite XL vehicles",
  ],
  primaryCta: { label: "Download the App", href: `/${appExperienceAnchor}` },
  secondaryCta: { label: "Explore All Routes", href: "/#routes-heading" },
  faqHeading: "Calgary to Canmore FAQ",
  faqs: [
    {
      q: "How far in advance should I schedule a Calgary to Canmore trip?",
      a: "PrimeKar trips are scheduled in advance through the app. Exact lead-time recommendations are not published — schedule as soon as your plans are confirmed.",
    },
    {
      q: "Can I combine a Canmore trip with an airport pickup?",
      a: "PrimeKar offers both Calgary Airport (YYC) transportation and private Alberta routes as separate scheduled trips through the app.",
    },
    {
      q: "Are road conditions to Canmore affected by weather?",
      a: "Mountain highway conditions can change seasonally. Check the official Alberta 511 highway-conditions service before you travel.",
    },
  ],
  finalCta: {
    heading: "Plan Your Trip to Canmore",
    subheading:
      "Download the PrimeKar app to schedule your Calgary to Canmore trip in advance.",
  },
};

export const canmoreScenarios = [
  "A one-way pickup from Calgary to Canmore, scheduled ahead of your arrival plans",
  "A round trip with a return pickup, arranged in the same app booking",
  "A trip paired with a Banff or Lake Louise visit, each scheduled as its own trip",
  "A multi-stop request, planned in advance rather than arranged along the way",
];

export const lakeLouiseContent: RoutePageContent = {
  path: "/calgary-to-lake-louise-transportation/",
  eyebrow: "Private route",
  h1: "Calgary to Lake Louise Private Transportation",
  subheading:
    "Schedule a private, pre-scheduled trip between Calgary and Lake Louise, Alberta through the PrimeKar app.",
  breadcrumbLabel: "Calgary to Lake Louise Transportation",
  quickFacts: [
    "Calgary to Lake Louise, Alberta",
    "Private, pre-scheduled trip",
    "Scheduled through the app",
    "Executive & Elite XL vehicles",
  ],
  primaryCta: { label: "Download the App", href: `/${appExperienceAnchor}` },
  secondaryCta: { label: "Explore All Routes", href: "/#routes-heading" },
  faqHeading: "Calgary to Lake Louise FAQ",
  faqs: [
    {
      q: "How far in advance should I schedule a Calgary to Lake Louise trip?",
      a: "PrimeKar trips are scheduled in advance through the app. Exact lead-time recommendations are not published — schedule as soon as your plans are confirmed.",
    },
    {
      q: "Can I combine a Lake Louise trip with a Banff stop?",
      a: "PrimeKar schedules private Alberta routes as separate trips through the app — a Lake Louise trip and a Banff trip are each scheduled individually.",
    },
    {
      q: "Are road and park conditions near Lake Louise affected by weather or season?",
      a: "Mountain highway and park conditions can change seasonally. Check the official Alberta 511 highway-conditions service and Parks Canada before you travel.",
    },
  ],
  finalCta: {
    heading: "Plan Your Trip to Lake Louise",
    subheading:
      "Download the PrimeKar app to schedule your Calgary to Lake Louise trip in advance.",
  },
};

export const lakeLouiseScenarios = [
  "A one-way pickup from Calgary to Lake Louise, scheduled ahead of your arrival plans",
  "A round trip with a return pickup, arranged in the same app booking",
  "An early departure timed for a full day at Lake Louise",
  "A multi-stop request combining Lake Louise with another Alberta route",
];

export const jasperContent: RoutePageContent = {
  path: "/calgary-to-jasper-transportation/",
  eyebrow: "Private route",
  h1: "Calgary to Jasper Private Transportation",
  subheading:
    "Schedule a private, pre-scheduled longer-distance trip between Calgary and Jasper, Alberta through the PrimeKar app.",
  breadcrumbLabel: "Calgary to Jasper Transportation",
  quickFacts: [
    "Calgary to Jasper, Alberta",
    "Private, pre-scheduled trip",
    "Scheduled through the app",
    "Executive & Elite XL vehicles",
  ],
  primaryCta: { label: "Download the App", href: `/${appExperienceAnchor}` },
  secondaryCta: { label: "Explore All Routes", href: "/#routes-heading" },
  faqHeading: "Calgary to Jasper FAQ",
  faqs: [
    {
      q: "How far in advance should I schedule a Calgary to Jasper trip?",
      a: "PrimeKar trips are scheduled in advance through the app. Given the longer distance, schedule as soon as your travel plans are confirmed.",
    },
    {
      q: "Can I schedule a multi-stop trip through Banff, Lake Louise and Jasper?",
      a: "Each PrimeKar route is scheduled as its own trip through the app. Multi-stop planning is arranged in advance rather than on the road.",
    },
    {
      q: "Are road conditions along the route to Jasper affected by weather or season?",
      a: "Mountain highway conditions along this route can change seasonally. Check the official Alberta 511 highway-conditions service before you travel.",
    },
  ],
  finalCta: {
    heading: "Plan Your Trip to Jasper",
    subheading:
      "Download the PrimeKar app to schedule your Calgary to Jasper trip in advance.",
  },
};

export const jasperScenarios = [
  "A one-way pickup from Calgary to Jasper, scheduled well ahead of your travel plans",
  "A round trip with a return pickup, arranged in the same app booking",
  "A longer-distance trip planned with an early departure",
  "A multi-stop itinerary through other Alberta routes, each scheduled as its own trip",
];

/** All four route paths, once all are built — passed to each RoutePage as `builtRoutePaths`. */
export const allRoutePaths = [
  banffContent.path,
  canmoreContent.path,
  lakeLouiseContent.path,
  jasperContent.path,
];
