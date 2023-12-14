import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBigUp = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9 18v-6H5l7-7 7 7h-4v6z" />
  </svg>
);
export default SvgArrowBigUp;
