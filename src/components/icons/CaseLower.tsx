import * as React from "react";
import type { SVGProps } from "react";
const SvgCaseLower = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={7} cy={12} r={3} />
    <path d="M10 9v6" />
    <circle cx={17} cy={12} r={3} />
    <path d="M14 7v8" />
  </svg>
);
export default SvgCaseLower;
