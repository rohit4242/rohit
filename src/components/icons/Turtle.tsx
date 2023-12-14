import * as React from "react";
import type { SVGProps } from "react";
const SvgTurtle = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4zM4.82 7.9 8 10M15.18 7.9 12 10" />
    <path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
  </svg>
);
export default SvgTurtle;
