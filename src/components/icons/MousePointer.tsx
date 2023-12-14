import * as React from "react";
import type { SVGProps } from "react";
const SvgMousePointer = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51zM13 13l6 6" />
  </svg>
);
export default SvgMousePointer;
