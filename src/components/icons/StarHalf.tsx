import * as React from "react";
import type { SVGProps } from "react";
const SvgStarHalf = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
  </svg>
);
export default SvgStarHalf;
