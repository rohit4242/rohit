import * as React from "react";
import type { SVGProps } from "react";
const SvgShovel = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 22v-5l5-5 5 5-5 5zM9.5 14.5 16 8M17 2l5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5z" />
  </svg>
);
export default SvgShovel;
