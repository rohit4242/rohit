import * as React from "react";
import type { SVGProps } from "react";
const SvgText = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17 6.1H3M21 12.1H3M15.1 18H3" />
  </svg>
);
export default SvgText;
