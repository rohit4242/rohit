import * as React from "react";
import type { SVGProps } from "react";
const SvgListFilter = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 6h18M7 12h10M10 18h4" />
  </svg>
);
export default SvgListFilter;
