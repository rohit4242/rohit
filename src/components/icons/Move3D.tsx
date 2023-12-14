import * as React from "react";
import type { SVGProps } from "react";
const SvgMove3D = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M5 3v16h16M5 19l6-6" />
    <path d="m2 6 3-3 3 3M18 16l3 3-3 3" />
  </svg>
);
export default SvgMove3D;
