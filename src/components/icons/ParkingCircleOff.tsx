import * as React from "react";
import type { SVGProps } from "react";
const SvgParkingCircleOff = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m5 5 14 14M13 13a3 3 0 1 0 0-6H9v2M9 17v-2.34" />
  </svg>
);
export default SvgParkingCircleOff;
