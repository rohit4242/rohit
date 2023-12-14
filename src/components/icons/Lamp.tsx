import * as React from "react";
import type { SVGProps } from "react";
const SvgLamp = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8 2h8l4 10H4zM12 12v6M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2z" />
  </svg>
);
export default SvgLamp;
