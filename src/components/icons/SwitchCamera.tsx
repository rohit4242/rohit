import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitchCamera = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
    <circle cx={12} cy={12} r={3} />
    <path d="m18 22-3-3 3-3M6 2l3 3-3 3" />
  </svg>
);
export default SvgSwitchCamera;
