import * as React from "react";
import type { SVGProps } from "react";
const SvgMoveDiagonal = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13 5h6v6M11 19H5v-6M19 5 5 19" />
  </svg>
);
export default SvgMoveDiagonal;
