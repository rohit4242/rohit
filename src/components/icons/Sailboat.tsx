import * as React from "react";
import type { SVGProps } from "react";
const SvgSailboat = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4M21 14 10 2 3 14zM10 2v16" />
  </svg>
);
export default SvgSailboat;
