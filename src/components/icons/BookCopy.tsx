import * as React from "react";
import type { SVGProps } from "react";
const SvgBookCopy = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 16V4a2 2 0 0 1 2-2h11" />
    <path d="M5 14H4a2 2 0 1 0 0 4h1M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12" />
  </svg>
);
export default SvgBookCopy;
