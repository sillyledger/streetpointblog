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
        <rect x="30" y="46" width="140" height="42" rx="14" fill="#C4664A" />
        <rect x="30" y="90" width="140" height="42" rx="14" fill="#31614B" />
        <rect x="30" y="134" width="140" height="42" rx="14" fill="#D8A63F" />
      </svg>
    ),
    { ...size },
  );
}
