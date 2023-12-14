import * as React from "react";
import type { SVGProps } from "react";
const SvgParkingSquareOff = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41M3 8.7V19a2 2 0 0 0 2 2h10.3M2 2l20 20" />
    <path d="M13 13a3 3 0 1 0 0-6H9v2M9 17v-2.3" />
  </svg>
);
export default SvgParkingSquareOff;
