import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpCircle = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m16 12-4-4-4 4M12 16V8" />
  </svg>
);
export default SvgArrowUpCircle;
