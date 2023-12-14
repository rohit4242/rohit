import * as React from "react";
import type { SVGProps } from "react";
const SvgRadar = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34M4 6h.01M2.29 9.62a10 10 0 1 0 19.02-1.27" />
    <path d="M16.24 7.76a6 6 0 1 0-8.01 8.91M12 18h.01M17.99 11.66a6 6 0 0 1-2.22 5.01" />
    <circle cx={12} cy={12} r={2} />
    <path d="m13.41 10.59 5.66-5.66" />
  </svg>
);
export default SvgRadar;