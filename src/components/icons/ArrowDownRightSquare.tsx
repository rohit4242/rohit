import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownRightSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m8 8 8 8M16 8v8H8" />
  </svg>
);
export default SvgArrowDownRightSquare;
