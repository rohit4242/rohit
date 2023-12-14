import * as React from "react";
import type { SVGProps } from "react";
const SvgActivitySquare = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17 12h-2l-2 5-2-10-2 5H7" />
  </svg>
);
export default SvgActivitySquare;
