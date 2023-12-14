import * as React from "react";
import type { SVGProps } from "react";
const SvgScanEye = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
    <circle cx={12} cy={12} r={1} />
    <path d="M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5" />
  </svg>
);
export default SvgScanEye;
