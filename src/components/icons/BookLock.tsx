import * as React from "react";
import type { SVGProps } from "react";
const SvgBookLock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" />
    <path d="M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20" />
    <rect width={8} height={5} x={12} y={6} rx={1} />
    <path d="M18 6V4a2 2 0 1 0-4 0v2" />
  </svg>
);
export default SvgBookLock;
