import * as React from "react";
import type { SVGProps } from "react";
const SvgEqualNot = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M5 9h14M5 15h14M19 5 5 19" />
  </svg>
);
export default SvgEqualNot;
