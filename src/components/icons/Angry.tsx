import * as React from "react";
import type { SVGProps } from "react";
const SvgAngry = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 16s-1.5-2-4-2-4 2-4 2M7.5 8 10 9M14 9l2.5-1M15 10" />
  </svg>
);
export default SvgAngry;
