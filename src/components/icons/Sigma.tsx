import * as React from "react";
import type { SVGProps } from "react";
const SvgSigma = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M18 7V4H6l6 8-6 8h12v-3" />
  </svg>
);
export default SvgSigma;
