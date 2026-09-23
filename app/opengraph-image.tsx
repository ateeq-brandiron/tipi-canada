import { ImageResponse } from "next/og";
import { company, hero, site } from "@/content/site";
import { logoDataUri } from "@/lib/brand-assets";

export const alt = `${company.name} — ${company.project}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand colours (see app/globals.css). Forest is a temporary value pending the Brand Guide hex.
const FOREST = "#1f3d2b";
const YELLOW = "#fdcb25";

export default async function OpengraphImage() {
  const mark = await logoDataUri("logo-mark-white.svg");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: FOREST,
          color: "#ffffff",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: "absolute", top: 0, left: 0 }}>
          <path d="M-20 470 C 160 420, 300 500, 470 450 S 760 350, 930 390 S 1120 470, 1220 430" stroke={YELLOW} strokeOpacity="0.4" fill="none" strokeWidth="1.5" />
          <path d="M-20 510 C 180 460, 320 540, 490 490 S 780 390, 950 430 S 1140 510, 1220 470" stroke={YELLOW} strokeOpacity="0.4" fill="none" strokeWidth="1.5" />
          <path d="M-20 550 C 200 500, 340 580, 510 530 S 800 430, 970 470 S 1160 550, 1220 510" stroke={YELLOW} strokeOpacity="0.4" fill="none" strokeWidth="1.5" />
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={mark} width={86} height={96} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 700 }}>{company.name}</div>
            <div style={{ fontSize: 22, color: YELLOW, letterSpacing: 2 }}>{site.brandLines.secondary.toUpperCase()}</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>{hero.headline[0]}</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>{hero.headline[1]}</div>
          <div style={{ fontSize: 30, marginTop: 28, color: "rgba(255,255,255,0.9)" }}>
            {`${company.project} · Blewett, British Columbia`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
