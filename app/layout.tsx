import type { Metadata, Viewport } from "next";
import { Caladea, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { company, site } from "@/content/site";
import {
  ALLOW_INDEXING,
  GA_MEASUREMENT_ID,
  GOOGLE_SITE_VERIFICATION,
  SITE_URL,
} from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/*
 * Brand headings are Cambria Bold. Cambria is a licensed Microsoft font with no
 * web licence supplied, so the stack prefers a locally installed Cambria, then
 * Caladea (metric-compatible with Cambria, SIL OFL), then Georgia/serif.
 */
const caladea = Caladea({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-caladea",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: `%s | ${company.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: company.name,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.legalOperatingName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: company.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: ALLOW_INDEXING
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  verification: GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : undefined,
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${caladea.variable}`}>
      <body className="min-h-dvh bg-white text-black">
        {children}
        {GA_MEASUREMENT_ID ? <GoogleAnalytics gaId={GA_MEASUREMENT_ID} /> : null}
      </body>
    </html>
  );
}
