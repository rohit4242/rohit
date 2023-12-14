import * as React from "react";
import type { SVGProps } from "react";
const SvgCombine = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={8} height={8} x={2} y={2} rx={2} />
    <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2M10 18H5c-1.7 0-3-1.3-3-3v-1" />
    <path d="m7 21 3-3-3-3" />
    <rect width={8} height={8} x={14} y={14} rx={2} />
  </svg>
);
export default SvgCombine;
