import * as React from "react";
import type { SVGProps } from "react";
const SvgFileCog = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={6} cy={13} r={3} />
    <path d="m9.7 14.4-.9-.3M3.2 11.9l-.9-.3M4.6 16.7l.3-.9M7.6 16.7l-.4-1M4.8 10.3l-.4-1M2.3 14.6l1-.4M8.7 11.8l1-.4M7.4 9.3l-.3.9M14 2v6h6" />
    <path d="M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5" />
  </svg>
);
export default SvgFileCog;
