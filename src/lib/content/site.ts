/**
 * Typed content objects for site-wide chrome (nav, footer, CTAs, NAP).
 * Sourced from docs/sitemap.md, docs/cta-map.md, docs/legal-content-audit.md
 * (D-017 approved baseline). Destination pages beyond Home are not yet built
 * in Phase B — see docs/decision-log.md and the Phase B completion report.
 */

export type NavLink = {
  label: string;
  href: string;
};

// Parent items with children render as a dropdown/accordion trigger in both
// DesktopNav and MobileNav — they never navigate via their own href, so
// `href` is optional rather than a dead/unreachable route
// (docs/homepage-review.md F-013). "Private Routes" keeps an href pointing
// at the approved `/private-trips/` hub for when a link-based rendering is
// used in the future; "Services" has none because `/services` is not an
// approved sitemap page.
export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

// Verified live on 2026-07-18 (App Store + Google Play listings both resolve
// to the real PrimeKar app). Tracking params dropped per decision-log.md.
export const appLinks = {
  appStore: "https://apps.apple.com/ca/app/primekar/id6753017125",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.primekar.customer",
};

// In-page anchor for the App Experience section, which holds the two
// verified store links above. Used as the working destination for the
// primary "Download the App" action until /download-app is built (Phase F).
export const appExperienceAnchor = "#app-experience";

export const primaryNav: NavItem[] = [
  {
    label: "Services",
    children: [
      {
        label: "Calgary Airport Transportation",
        href: "/calgary-airport-transportation/",
      },
      {
        label: "Executive Transportation",
        href: "/executive-transportation-calgary/",
      },
      {
        label: "Corporate Transportation",
        href: "/corporate-transportation-calgary/",
      },
      {
        label: "Events Transportation",
        href: "/events-transportation-calgary/",
      },
      {
        label: "Early-Morning Transportation",
        href: "/early-morning-airport-transportation-calgary/",
      },
      { label: "Private Trips", href: "/private-trips/" },
    ],
  },
  { label: "Airport", href: "/calgary-airport-transportation/" },
  {
    label: "Private Routes",
    href: "/private-trips/",
    children: [
      { label: "Calgary to Banff", href: "/calgary-to-banff-transportation/" },
      {
        label: "Calgary to Canmore",
        href: "/calgary-to-canmore-transportation/",
      },
      {
        label: "Calgary to Lake Louise",
        href: "/calgary-to-lake-louise-transportation/",
      },
      {
        label: "Calgary to Jasper",
        href: "/calgary-to-jasper-transportation/",
      },
    ],
  },
  { label: "Corporate", href: "/corporate-transportation-calgary/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "About", href: "/about/" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      {
        label: "Calgary Airport Transportation",
        href: "/calgary-airport-transportation/",
      },
      {
        label: "Executive Transportation",
        href: "/executive-transportation-calgary/",
      },
      {
        label: "Corporate Transportation",
        href: "/corporate-transportation-calgary/",
      },
      {
        label: "Events Transportation",
        href: "/events-transportation-calgary/",
      },
      {
        label: "Early-Morning Transportation",
        href: "/early-morning-airport-transportation-calgary/",
      },
    ],
  },
  {
    title: "Routes",
    links: [
      { label: "Calgary to Banff", href: "/calgary-to-banff-transportation/" },
      {
        label: "Calgary to Canmore",
        href: "/calgary-to-canmore-transportation/",
      },
      {
        label: "Calgary to Lake Louise",
        href: "/calgary-to-lake-louise-transportation/",
      },
      {
        label: "Calgary to Jasper",
        href: "/calgary-to-jasper-transportation/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About PrimeKar", href: "/about/" },
      { label: "How It Works", href: "/how-it-works/" },
      { label: "Fleet", href: "/fleet/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy/" },
      { label: "Terms and Conditions", href: "/terms/" },
    ],
  },
];

// Sourced from docs/legal-content-audit.md (current-site contact info) and
// approved for referencing in marketing copy re: corporate coordination,
// inquiries and support per docs/decision-log.md D-009. Not presented as an
// immediate-dispatch channel.
export const nap = {
  email: "support@primekar.com",
  emailHref: "mailto:support@primekar.com",
  phoneDisplay: "+1 (403) 370-9700",
  phoneHref: "tel:+14033709700",
  locality: "Calgary, Alberta",
};

export const fleet = [
  {
    tier: "Executive",
    vehicles: ["Lexus", "Tesla", "Lincoln"],
  },
  {
    tier: "Elite XL",
    vehicles: ["Chevrolet Suburban"],
  },
];

export const albertaRoutes = [
  {
    name: "Calgary to Banff",
    href: "/calgary-to-banff-transportation/",
    size: "dominant" as const,
  },
  {
    name: "Calgary to Canmore",
    href: "/calgary-to-canmore-transportation/",
    size: "paired" as const,
  },
  {
    name: "Calgary to Lake Louise",
    href: "/calgary-to-lake-louise-transportation/",
    size: "paired" as const,
  },
  {
    name: "Calgary to Jasper",
    href: "/calgary-to-jasper-transportation/",
    size: "wide" as const,
  },
];

export const serviceFamilies = [
  {
    name: "Airport Transportation",
    description:
      "Schedule a pickup or drop-off at Calgary International Airport ahead of your flight.",
    href: "/calgary-airport-transportation/",
  },
  {
    name: "Executive Transportation",
    description:
      "Pre-scheduled transportation for individual executives and business travel.",
    href: "/executive-transportation-calgary/",
  },
  {
    name: "Corporate Transportation",
    description:
      "Scheduled transportation for organizations coordinating travel for teams and guests.",
    href: "/corporate-transportation-calgary/",
  },
  {
    name: "Private Alberta Routes",
    description:
      "Scheduled private trips between Calgary and Banff, Canmore, Lake Louise and Jasper.",
    href: "/private-trips/",
  },
];
