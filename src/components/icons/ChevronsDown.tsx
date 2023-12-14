import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronsDown = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m7 6 5 5 5-5M7 13l5 5 5-5" />
  </svg>
);
export default SvgChevronsDown;
