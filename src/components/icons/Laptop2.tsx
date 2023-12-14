import * as React from "react";
import type { SVGProps } from "react";
const SvgLaptop2 = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={12} x={3} y={4} rx={2} ry={2} />
    <path d="M2 20h20" />
  </svg>
);
export default SvgLaptop2;