import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBigDown = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 6v6h4l-7 7-7-7h4V6z" />
  </svg>
);
export default SvgArrowBigDown;
