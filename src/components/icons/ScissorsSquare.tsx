import * as React from "react";
import type { SVGProps } from "react";
const SvgScissorsSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={20} height={20} x={2} y={2} rx={2} />
    <circle cx={8} cy={8} r={2} />
    <path d="M9.414 9.414 12 12M14.8 14.8 18 18" />
    <circle cx={8} cy={16} r={2} />
    <path d="m18 6-8.586 8.586" />
  </svg>
);
export default SvgScissorsSquare;
