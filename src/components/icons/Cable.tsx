import * as React from "react";
import type { SVGProps } from "react";
const SvgCable = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2ZM3 5V3M7 5V3" />
    <path d="M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9M17 21v-2M21 21v-2" />
    <path d="M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z" />
  </svg>
);
export default SvgCable;
