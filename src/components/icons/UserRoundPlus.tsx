import * as React from "react";
import type { SVGProps } from "react";
const SvgUserRoundPlus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 21a8 8 0 0 1 13.292-6" />
    <circle cx={10} cy={8} r={5} />
    <path d="M19 16v6M22 19h-6" />
  </svg>
);
export default SvgUserRoundPlus;
