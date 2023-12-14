import * as React from "react";
import type { SVGProps } from "react";
const SvgOption = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 3h6l6 18h6M14 3h7" />
  </svg>
);
export default SvgOption;
