import * as React from "react";
import type { SVGProps } from "react";
const SvgAxe = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" />
    <path d="M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" />
  </svg>
);
export default SvgAxe;
