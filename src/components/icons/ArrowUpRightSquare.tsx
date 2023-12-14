import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpRightSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={18} x={3} y={3} rx={2} />
    <path d="M8 8h8v8M8 16l8-8" />
  </svg>
);
export default SvgArrowUpRightSquare;
