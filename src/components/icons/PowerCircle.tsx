import * as React from "react";
import type { SVGProps } from "react";
const SvgPowerCircle = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 12V6M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5" />
  </svg>
);
export default SvgPowerCircle;
