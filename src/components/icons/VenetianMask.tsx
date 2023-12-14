import * as React from "react";
import type { SVGProps } from "react";
const SvgVenetianMask = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
    <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2" />
  </svg>
);
export default SvgVenetianMask;
