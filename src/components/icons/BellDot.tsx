import * as React from "react";
import type { SVGProps } from "react";
const SvgBellDot = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    <circle cx={18} cy={8} r={3} />
  </svg>
);
export default SvgBellDot;
