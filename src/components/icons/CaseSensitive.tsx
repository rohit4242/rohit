import * as React from "react";
import type { SVGProps } from "react";
const SvgCaseSensitive = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m3 15 4-8 4 8M4 13h6" />
    <circle cx={18} cy={12} r={3} />
    <path d="M21 9v6" />
  </svg>
);
export default SvgCaseSensitive;
