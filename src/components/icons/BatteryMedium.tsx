import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryMedium = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={16} height={10} x={2} y={7} rx={2} ry={2} />
    <path d="M22 11v2M6 11v2M10 11v2" />
  </svg>
);
export default SvgBatteryMedium;
