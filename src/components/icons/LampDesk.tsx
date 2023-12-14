import * as React from "react";
import type { SVGProps } from "react";
const SvgLampDesk = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m14 5-3 3 2 7 8-8z" />
    <path d="m14 5-3 3-3-3 3-3z" />
    <path d="M9.5 6.5 4 12l3 6M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2z" />
  </svg>
);
export default SvgLampDesk;
