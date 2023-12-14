import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignCenter = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21 6H3M17 12H7M19 18H5" />
  </svg>
);
export default SvgAlignCenter;
