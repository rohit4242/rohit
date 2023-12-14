import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageSquareDashed = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 6V5c0-1.1.9-2 2-2h2M11 3h3M18 3h1c1.1 0 2 .9 2 2M21 9v2M21 15c0 1.1-.9 2-2 2h-1M14 17h-3M7 17l-4 4v-5M3 12v-2" />
  </svg>
);
export default SvgMessageSquareDashed;
