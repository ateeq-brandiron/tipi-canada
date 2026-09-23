/**
 * Feature flags and environment-driven configuration.
 * Everything here is safe to evaluate on the server at build/request time.
 */

function envFlag(value: string | undefined, fallback: boolean): boolean {
  if (value === undefined || value === "") return fallback;
  return value === "true" || value === "1";
}

/**
 * SHOW_INVESTMENT_ASK — shows "The Investment" section and its nav link.
 * OFF by default until the client approves the ask. Enable per environment with
 * NEXT_PUBLIC_SHOW_INVESTMENT_ASK=true (or edit the fallback below).
 */
export const SHOW_INVESTMENT_ASK = envFlag(process.env.NEXT_PUBLIC_SHOW_INVESTMENT_ASK, false);

/** Canonical site URL. Override for preview deployments with NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://tipicanada.com").replace(
  /\/$/,
  "",
);

/** GA4 measurement ID (e.g. G-XXXXXXXXXX). Analytics are not loaded when unset. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

/** Google Search Console HTML-tag verification token (content value only). */
export const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION || "";

/**
 * Only allow search engines to index the production deployment. Vercel sets
 * VERCEL_ENV to "production" | "preview" | "development".
 */
export const ALLOW_INDEXING =
  process.env.VERCEL_ENV === undefined ? true : process.env.VERCEL_ENV === "production";

/**
 * SHOW_REVIEW_NOTES — renders "[pending confirmation]" badges and photo
 * placeholder notes for client review. Set NEXT_PUBLIC_SHOW_REVIEW_NOTES=false
 * for launch once every placeholder has been resolved.
 */
export const SHOW_REVIEW_NOTES = envFlag(process.env.NEXT_PUBLIC_SHOW_REVIEW_NOTES, true);
