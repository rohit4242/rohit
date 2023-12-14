import * as React from "react";
import type { SVGProps } from "react";
const SvgFileDigit = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={4} height={6} x={2} y={12} rx={2} />
    <path d="M14 2v6h6" />
    <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
    <path d="M10 12h2v6M10 18h4" />
  </svg>
);
export default SvgFileDigit;
