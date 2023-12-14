import * as React from "react";
import type { SVGProps } from "react";
const SvgCrown = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7zm3 16h14" />
  </svg>
);
export default SvgCrown;
