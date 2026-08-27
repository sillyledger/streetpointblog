import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg
        width={180}
        height={180}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="100" r="26" fill="#B84A28" />
        <circle cx="100" cy="100" r="26" fill="#365840" />
        <circle cx="160" cy="100" r="26" fill="#9C711C" />
      </svg>
    ),
    { ...size },
  );
}
