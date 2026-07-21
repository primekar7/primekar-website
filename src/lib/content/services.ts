import type { ServicePageContent } from "@/components/templates/service-page";
import { appExperienceAnchor } from "@/lib/content/site";

/**
 * Typed content for ServicePage instances (docs/component-map.md).
 * Content is deliberately conservative: only facts already verified and
 * approved on the homepage (docs/decision-log.md D-010). No pricing,
 * timing, luggage, capacity, pickup-zone, meet-and-greet, flight-tracking or
 * waiting-time claims — all explicitly prohibited pending verification
 * (v7 §7). Where a page needs a fact that has not been verified, it is
 * omitted here rather than invented (docs/page-template-review.md PT-005).
 */
export const airportContent: ServicePageContent = {
  path: "/calgary-airport-transportation/",
  eyebrow: "Airport",
  h1: "Calgary Airport Transportation You Can Schedule in Advance",
  subheading:
    "Schedule a pickup or drop-off at Calgary International Airport (YYC) in advance through the PrimeKar app — for flights, early departures and arrivals where planning matters.",
  breadcrumbLabel: "Calgary Airport Transportation",
  quickFacts: [
    "Calgary International Airport (YYC)",
    "Pickup and drop-off",
    "Scheduled in advance through the app",
    "Executive & Elite XL vehicles",
  ],
  primaryCta: { label: "Download the App", href: `/${appExperienceAnchor}` },
  secondaryCta: { label: "Explore All Services", href: "/#services" },
  faqHeading: "Airport Transportation FAQ",
  faqs: [
    {
      q: "How do I schedule an airport ride with PrimeKar?",
      a: "Airport pickups and drop-offs are scheduled in advance through the PrimeKar app, available on iPhone and Android.",
    },
    {
      q: "Can I schedule an early-morning airport pickup?",
      a: "Yes — trips are scheduled in advance, which is useful for early-morning departures where planning matters.",
    },
    {
      q: "Does PrimeKar offer on-demand airport pickup?",
      a: "No. PrimeKar is a pre-scheduled service — rides are planned in advance through the app rather than requested on demand.",
    },
    {
      q: "Which vehicles are used for airport transportation?",
      a: "Airport trips use the same Executive and Elite XL vehicle tiers available across PrimeKar's Calgary and Alberta service.",
    },
  ],
  finalCta: {
    heading: "Schedule Your Airport Ride",
    subheading:
      "Download the PrimeKar app to schedule your Calgary International Airport pickup or drop-off in advance.",
  },
};

export const airportScenarios = [
  "A flight departure scheduled ahead of time, planned around when you need to be at the terminal",
  "An arrival pickup arranged in advance, so your ride is confirmed before you land",
  "An early-morning departure, where a pre-confirmed schedule removes last-minute uncertainty",
  "A return trip from the airport, booked in the same app you used to schedule the pickup",
];

export const executiveContent: ServicePageContent = {
  path: "/executive-transportation-calgary/",
  eyebrow: "Executive",
  h1: "Executive Transportation in Calgary",
  subheading:
    "Schedule pre-scheduled, individual executive transportation in Calgary through the PrimeKar app — planned in advance rather than requested on demand.",
  breadcrumbLabel: "Executive Transportation",
  quickFacts: [
    "Individual executive travel",
    "Calgary, Alberta",
    "Scheduled in advance through the app",
    "Executive & Elite XL vehicles",
  ],
  primaryCta: { label: "Download the App", href: `/${appExperienceAnchor}` },
  secondaryCta: { label: "Explore All Services", href: "/#services" },
  faqHeading: "Executive Transportation FAQ",
  faqs: [
    {
      q: "How is Executive Transportation different from Corporate Transportation?",
      a: "Executive Transportation is scheduled by an individual for their own travel. Corporate Transportation is coordinated by an organization for its team or guests — see the Corporate Transportation page.",
    },
    {
      q: "How do I schedule a ride?",
      a: "Executive trips are scheduled in advance through the PrimeKar app, available on iPhone and Android.",
    },
    {
      q: "Is this an on-demand or dispatch service?",
      a: "No. PrimeKar is a pre-scheduled service — rides are planned in advance through the app rather than requested on demand.",
    },
  ],
  finalCta: {
    heading: "Schedule Your Executive Ride",
    subheading:
      "Download the PrimeKar app to schedule your Calgary executive transportation in advance.",
  },
};

export const executiveScenarios = [
  "A single meeting-to-meeting trip, scheduled ahead of a busy day",
  "A recurring individual travel pattern, planned in advance each time through the app",
  "An early-morning or evening trip, timed around your own schedule",
  "A one-way or return trip, both scheduled the same way in the app",
];

export const corporateContent: ServicePageContent = {
  path: "/corporate-transportation-calgary/",
  eyebrow: "Corporate",
  h1: "Corporate Transportation in Calgary",
  subheading:
    "Coordinate scheduled transportation for your organization's team or guests in Calgary — planned in advance through the PrimeKar app, with corporate coordination support by email and phone.",
  breadcrumbLabel: "Corporate Transportation",
  quickFacts: [
    "For organizations and teams",
    "Calgary, Alberta",
    "Scheduled in advance through the app",
    "Corporate coordination support",
  ],
  primaryCta: { label: "Download the App", href: `/${appExperienceAnchor}` },
  secondaryCta: { label: "Contact PrimeKar", href: "/contact/" },
  faqHeading: "Corporate Transportation FAQ",
  faqs: [
    {
      q: "How do we coordinate transportation for our organization?",
      a: "Individual trips are scheduled in advance through the PrimeKar app. For coordination across a team or event, contact PrimeKar directly — see the Contact page.",
    },
    {
      q: "Can we book on behalf of guests or team members?",
      a: "Corporate coordination is handled directly with PrimeKar — contact PrimeKar to discuss your organization's needs.",
    },
    {
      q: "How is this different from Events Transportation?",
      a: "Corporate Transportation covers ongoing organizational travel needs; Events Transportation is scoped to a specific event — see the Events Transportation page.",
    },
  ],
  finalCta: {
    heading: "Discuss Corporate Transportation",
    subheading:
      "Contact PrimeKar to coordinate scheduled transportation for your organization, or download the app for individual trips.",
  },
};

export const corporateScenarios = [
  "Scheduled transportation coordinated across a team, planned in advance rather than arranged ad hoc",
  "Recurring organizational travel, set up as a standing pre-scheduled pattern",
  "Guest transportation coordinated on an organization's behalf",
  "Direct coordination with PrimeKar for organization-specific scheduling needs",
];

export const eventsContent: ServicePageContent = {
  path: "/events-transportation-calgary/",
  eyebrow: "Events",
  h1: "Pre-Scheduled Transportation for Calgary Events",
  subheading:
    "Schedule transportation around a specific Calgary event in advance through the PrimeKar app — planned ahead of the event rather than arranged on the day.",
  breadcrumbLabel: "Events Transportation",
  quickFacts: [
    "Event-specific scheduling",
    "Calgary, Alberta",
    "Scheduled in advance through the app",
    "Executive & Elite XL vehicles",
  ],
  primaryCta: { label: "Download the App", href: `/${appExperienceAnchor}` },
  secondaryCta: { label: "Explore All Services", href: "/#services" },
  faqHeading: "Events Transportation FAQ",
  faqs: [
    {
      q: "How far ahead should I schedule transportation for an event?",
      a: "Trips are scheduled in advance through the app. Exact lead-time recommendations are not published — schedule as soon as your event plans are confirmed.",
    },
    {
      q: "Can I schedule transportation for a group attending the same event?",
      a: "Each PrimeKar trip is scheduled individually through the app. For coordinating transportation across a group, see Corporate Transportation.",
    },
    {
      q: "Is this different from Corporate Transportation?",
      a: "Events Transportation is scoped to a specific event; Corporate Transportation covers ongoing organizational travel — see the Corporate Transportation page.",
    },
  ],
  finalCta: {
    heading: "Schedule Transportation for Your Event",
    subheading:
      "Download the PrimeKar app to schedule transportation around your Calgary event in advance.",
  },
};

export const eventsScenarios = [
  "Arrival at a venue timed ahead of an event's start",
  "Departure scheduled around when an event is expected to end",
  "A trip between two event-related stops, planned in advance",
  "A return trip home, scheduled at the same time as the arrival trip",
];

export const earlyMorningContent: ServicePageContent = {
  path: "/early-morning-airport-transportation-calgary/",
  eyebrow: "Early morning",
  h1: "Early-Morning Airport Transportation in Calgary",
  subheading:
    "Schedule an early-morning pickup for a Calgary International Airport (YYC) departure in advance through the PrimeKar app — planned the night before, not requested at the last minute.",
  breadcrumbLabel: "Early-Morning Transportation",
  quickFacts: [
    "Early-morning airport departures",
    "Calgary International Airport (YYC)",
    "Scheduled in advance through the app",
    "Executive & Elite XL vehicles",
  ],
  primaryCta: { label: "Download the App", href: `/${appExperienceAnchor}` },
  secondaryCta: {
    label: "Calgary Airport Transportation",
    href: "/calgary-airport-transportation/",
  },
  faqHeading: "Early-Morning Transportation FAQ",
  faqs: [
    {
      q: "Can I schedule a pickup for a very early flight?",
      a: "Yes — trips are scheduled in advance through the app, which is useful for early-morning departures where planning matters.",
    },
    {
      q: "How is this different from the general Airport Transportation page?",
      a: "This page focuses specifically on early-morning departure planning. General Calgary Airport Transportation covers all pickup and drop-off timing — see that page for the full picture.",
    },
    {
      q: "Do I need to confirm my pickup again on the morning of my flight?",
      a: "Trip details are reviewed in the app before your ride, as with any PrimeKar trip.",
    },
  ],
  finalCta: {
    heading: "Schedule Your Early-Morning Pickup",
    subheading:
      "Download the PrimeKar app to schedule your early-morning Calgary Airport pickup in advance.",
  },
};

export const earlyMorningScenarios = [
  "A pre-dawn departure, scheduled the night before so nothing is arranged last-minute",
  "A first-flight-of-the-day pickup, planned around a specific departure time",
  "A multi-stop early trip, arranged in advance rather than on the morning itself",
  "A recurring early-departure pattern, scheduled the same way each time",
];
