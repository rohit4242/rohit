import * as React from "react";
import type { SVGProps } from "react";
const SvgGlassWater = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22" />
    <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
  </svg>
);
export default SvgGlassWater;
