import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { SkipLink } from "@/components/primitives/skip-link";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PrimeKar — Premium Pre-Scheduled Black-Car Service in Calgary",
    template: "%s — PrimeKar",
  },
  description:
    "PrimeKar provides premium pre-scheduled transportation in Calgary and Alberta — airport transfers, executive and corporate travel, and private routes to Banff, Canmore, Lake Louise and Jasper.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "PrimeKar",
    title: "PrimeKar — Premium Pre-Scheduled Black-Car Service in Calgary",
    description:
      "Premium pre-scheduled transportation in Calgary and Alberta, scheduled and managed through the PrimeKar app.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeKar — Premium Pre-Scheduled Black-Car Service in Calgary",
    description:
      "Premium pre-scheduled transportation in Calgary and Alberta, scheduled and managed through the PrimeKar app.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1D2B2E",
};

// Conservative Organization markup only (name/url/logo) — no address, phone,
// or areaServed, since NAP/business-entity details are not yet verified for
// structured-data use (docs/seo-map.md, docs/decision-log.md OPEN-3).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PrimeKar",
  url: siteUrl,
  logo: `${siteUrl}/brand/primekar-logo-dark.jpg`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={cn("font-sans", geist.variable)}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
