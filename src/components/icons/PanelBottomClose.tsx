import * as React from "react";
import type { SVGProps } from "react";
const SvgPanelBottomClose = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
    <path d="M3 15h18M15 8l-3 3-3-3" />
  </svg>
);
export default SvgPanelBottomClose;
