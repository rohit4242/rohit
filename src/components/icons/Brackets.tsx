import * as React from "react";
import type { SVGProps } from "react";
const SvgBrackets = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 3h3v18h-3M8 21H5V3h3" />
  </svg>
);
export default SvgBrackets;
