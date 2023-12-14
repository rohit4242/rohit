import * as React from "react";
import type { SVGProps } from "react";
const SvgListMinus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11 12H3M16 6H3M16 18H3M21 12h-6" />
  </svg>
);
export default SvgListMinus;
