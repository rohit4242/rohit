import * as React from "react";
import type { SVGProps } from "react";
const SvgPenTool = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m12 19 7-7 3 3-7 7z" />
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.586 7.586" />
    <circle cx={11} cy={11} r={2} />
  </svg>
);
export default SvgPenTool;
