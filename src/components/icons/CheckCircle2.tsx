import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckCircle2 = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export default SvgCheckCircle2;
