import * as React from "react";
import type { SVGProps } from "react";
const SvgPowerSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={18} x={3} y={3} rx={2} />
    <path d="M12 7v5M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8" />
  </svg>
);
export default SvgPowerSquare;
