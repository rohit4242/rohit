import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryWarning = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2M22 11v2M10 7v6M10 17v.01" />
  </svg>
);
export default SvgBatteryWarning;
