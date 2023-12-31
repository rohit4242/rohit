import * as React from "react";
import type { SVGProps } from "react";
const SvgFileBadge = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6" />
    <path d="M14 2v6h6M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    <path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
  </svg>
);
export default SvgFileBadge;
