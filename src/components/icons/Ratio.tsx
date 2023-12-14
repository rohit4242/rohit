import * as React from "react";
import type { SVGProps } from "react";
const SvgRatio = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={12} height={20} x={6} y={2} rx={2} />
    <rect width={20} height={12} x={2} y={6} rx={2} />
  </svg>
);
export default SvgRatio;
