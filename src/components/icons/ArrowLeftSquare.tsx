import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m12 8-4 4 4 4M16 12H8" />
  </svg>
);
export default SvgArrowLeftSquare;
