import * as React from "react";
import type { SVGProps } from "react";
const SvgUnlockKeyhole = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={16} r={1} />
    <rect width={18} height={12} x={3} y={10} rx={2} />
    <path d="M7 10V7a5 5 0 0 1 9.33-2.5" />
  </svg>
);
export default SvgUnlockKeyhole;
