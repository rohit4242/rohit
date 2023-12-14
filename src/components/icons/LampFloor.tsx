import * as React from "react";
import type { SVGProps } from "react";
const SvgLampFloor = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9 2h6l3 7H6zM12 9v13M9 22h6" />
  </svg>
);
export default SvgLampFloor;
