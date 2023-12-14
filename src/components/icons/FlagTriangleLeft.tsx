import * as React from "react";
import type { SVGProps } from "react";
const SvgFlagTriangleLeft = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17 22V2L7 7l10 5" />
  </svg>
);
export default SvgFlagTriangleLeft;
