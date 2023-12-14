import * as React from "react";
import type { SVGProps } from "react";
const SvgBold = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14 12a4 4 0 0 0 0-8H6v8M15 20a4 4 0 0 0 0-8H6v8Z" />
  </svg>
);
export default SvgBold;
