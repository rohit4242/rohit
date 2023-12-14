import * as React from "react";
import type { SVGProps } from "react";
const SvgCaseUpper = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m3 15 4-8 4 8M4 13h6M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4" />
  </svg>
);
export default SvgCaseUpper;
