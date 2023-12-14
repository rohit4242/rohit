import * as React from "react";
import type { SVGProps } from "react";
const SvgParkingCircle = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={10} />
    <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
  </svg>
);
export default SvgParkingCircle;
