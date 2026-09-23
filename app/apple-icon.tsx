import { ImageResponse } from "next/og";
import { logoDataUri } from "@/lib/brand-assets";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const mark = await logoDataUri("logo-mark.svg");
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
        <img src={mark} width={126} height={141} alt="" />
      </div>
    ),
    size,
  );
}
