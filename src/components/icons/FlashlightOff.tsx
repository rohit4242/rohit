import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashlightOff = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4M7 2h11v4c0 2-2 2-2 4v1M11 6h7M2 2l20 20" />
  </svg>
);
export default SvgFlashlightOff;
