import * as React from "react";
import type { SVGProps } from "react";
const SvgServerOff = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2zM22 17v-1a2 2 0 0 0-2-2h-1M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8zM6 18h.01M2 2l20 20" />
  </svg>
);
export default SvgServerOff;
