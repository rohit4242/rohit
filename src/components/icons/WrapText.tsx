import * as React from "react";
import type { SVGProps } from "react";
const SvgWrapText = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 6h18M3 12h15a3 3 0 1 1 0 6h-4" />
    <path d="m16 16-2 2 2 2M3 18h7" />
  </svg>
);
export default SvgWrapText;
