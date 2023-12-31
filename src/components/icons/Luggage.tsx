import * as React from "react";
import type { SVGProps } from "react";
const SvgLuggage = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
    <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14M10 20h4" />
    <circle cx={16} cy={20} r={2} />
    <circle cx={8} cy={20} r={2} />
  </svg>
);
export default SvgLuggage;
