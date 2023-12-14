import * as React from "react";
import type { SVGProps } from "react";
const SvgCassetteTape = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={20} height={16} x={2} y={4} rx={2} />
    <circle cx={8} cy={10} r={2} />
    <path d="M8 12h8" />
    <circle cx={16} cy={10} r={2} />
    <path d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" />
  </svg>
);
export default SvgCassetteTape;
