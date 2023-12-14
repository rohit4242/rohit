import * as React from "react";
import type { SVGProps } from "react";
const SvgRabbit = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
    <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.93 1.93 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1c-1.7 0-3 1.3-3 3" />
    <path d="M7.61 12.53a3 3 0 1 0-1.6 4.3M13 16a3 3 0 0 1 2.24 5M18 12h.01" />
  </svg>
);
export default SvgRabbit;
