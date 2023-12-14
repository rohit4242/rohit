import * as React from "react";
import type { SVGProps } from "react";
const SvgFlagTriangleRight = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M7 22V2l10 5-10 5" />
  </svg>
);
export default SvgFlagTriangleRight;
