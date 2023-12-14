import * as React from "react";
import type { SVGProps } from "react";
const SvgMoveHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m18 8 4 4-4 4M6 8l-4 4 4 4M2 12h20" />
  </svg>
);
export default SvgMoveHorizontal;
