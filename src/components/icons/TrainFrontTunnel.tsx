import * as React from "react";
import type { SVGProps } from "react";
const SvgTrainFrontTunnel = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 22V12a10 10 0 1 1 20 0v10" />
    <path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8M10 15h.01M14 15h.01" />
    <path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4ZM9 19l-2 3M15 19l2 3" />
  </svg>
);
export default SvgTrainFrontTunnel;
