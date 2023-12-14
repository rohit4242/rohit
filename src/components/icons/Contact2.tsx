import * as React from "react";
import type { SVGProps } from "react";
const SvgContact2 = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 18a4 4 0 0 0-8 0" />
    <circle cx={12} cy={11} r={3} />
    <rect width={18} height={18} x={3} y={4} rx={2} />
    <path d="M8 2v2M16 2v2" />
  </svg>
);
export default SvgContact2;
