import * as React from "react";
import type { SVGProps } from "react";
const SvgSeparatorHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 12h18M8 8l4-4 4 4M16 16l-4 4-4-4" />
  </svg>
);
export default SvgSeparatorHorizontal;
