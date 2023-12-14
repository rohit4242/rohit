import * as React from "react";
import type { SVGProps } from "react";
const SvgOutdent = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m7 8-4 4 4 4M21 12H11M21 6H11M21 18H11" />
  </svg>
);
export default SvgOutdent;
