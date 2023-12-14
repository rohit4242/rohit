import * as React from "react";
import type { SVGProps } from "react";
const SvgFileSearch = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
    <path d="M14 2v6h6M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6M9 18l-1.5-1.5" />
  </svg>
);
export default SvgFileSearch;
