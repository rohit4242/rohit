import * as React from "react";
import type { SVGProps } from "react";
const SvgMeh = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={10} />
    <path d="M8 15h8M9 9h.01M15 9h.01" />
  </svg>
);
export default SvgMeh;
