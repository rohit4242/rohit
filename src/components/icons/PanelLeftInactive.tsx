import * as React from "react";
import type { SVGProps } from "react";
const SvgPanelLeftInactive = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9 14v1M9 19v2M9 3v2M9 9v1" />
  </svg>
);
export default SvgPanelLeftInactive;
