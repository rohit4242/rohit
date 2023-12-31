import * as React from "react";
import type { SVGProps } from "react";
const SvgBellPlus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7M10.3 21a1.94 1.94 0 0 0 3.4 0M15 8h6M18 5v6" />
  </svg>
);
export default SvgBellPlus;
