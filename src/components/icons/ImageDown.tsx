import * as React from "react";
import type { SVGProps } from "react";
const SvgImageDown = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={9} cy={9} r={2} />
    <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8" />
    <path d="m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
    <path d="m14 19.5 3 3v-6M17 22.5l3-3" />
  </svg>
);
export default SvgImageDown;
