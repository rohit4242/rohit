import * as React from "react";
import type { SVGProps } from "react";
const SvgPauseOctagon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 15V9M14 15V9M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714z" />
  </svg>
);
export default SvgPauseOctagon;
