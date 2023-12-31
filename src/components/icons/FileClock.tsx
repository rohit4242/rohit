import * as React from "react";
import type { SVGProps } from "react";
const SvgFileClock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3" />
    <path d="M14 2v6h6" />
    <circle cx={8} cy={16} r={6} />
    <path d="M9.5 17.5 8 16.25V14" />
  </svg>
);
export default SvgFileClock;
