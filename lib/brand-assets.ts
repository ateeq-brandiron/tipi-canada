import "server-only";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Reads an official logo SVG from /public/brand as a data URI (for next/og images). */
export async function logoDataUri(file: "logo-mark.svg" | "logo-mark-white.svg" | "logo-primary.svg") {
  const svg = await readFile(join(process.cwd(), "public", "brand", file));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}
