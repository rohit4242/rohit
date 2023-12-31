import * as React from "react";
import type { SVGProps } from "react";
const SvgPinOff = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m2 2 20 20M12 17v5M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12M15 9.34V6h1a2 2 0 0 0 0-4H7.89" />
  </svg>
);
export default SvgPinOff;
