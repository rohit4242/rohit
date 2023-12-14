import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleSlash = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m9 15 6-6" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgCircleSlash;
