import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryCharging = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1M11 7l-3 5h4l-3 5M22 11v2" />
  </svg>
);
export default SvgBatteryCharging;
