import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBigLeft = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M18 15h-6v4l-7-7 7-7v4h6z" />
  </svg>
);
export default SvgArrowBigLeft;
