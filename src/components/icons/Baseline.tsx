import * as React from "react";
import type { SVGProps } from "react";
const SvgBaseline = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 20h16M6 16l6-12 6 12M8 12h8" />
  </svg>
);
export default SvgBaseline;
