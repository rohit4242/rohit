import * as React from "react";
import type { SVGProps } from "react";
const SvgSatellite = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13 7 9 3 5 7l4 4M17 11l4 4-4 4-4-4" />
    <path d="m8 12 4 4 6-6-4-4ZM16 8l3-3M9 21a6 6 0 0 0-6-6" />
  </svg>
);
export default SvgSatellite;
