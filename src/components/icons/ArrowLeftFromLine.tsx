import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftFromLine = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m9 6-6 6 6 6M3 12h14M21 19V5" />
  </svg>
);
export default SvgArrowLeftFromLine;
