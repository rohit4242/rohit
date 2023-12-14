import * as React from "react";
import type { SVGProps } from "react";
const SvgCaravan = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 9h4v4H2zM10 9h4v10h-4z" />
    <path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" />
    <circle cx={8} cy={19} r={2} />
    <path d="M10 19h12v-2" />
  </svg>
);
export default SvgCaravan;
