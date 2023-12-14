import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBigRight = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 9h6V5l7 7-7 7v-4H6z" />
  </svg>
);
export default SvgArrowBigRight;
