import * as React from "react";
import type { SVGProps } from "react";
const SvgPanelTopInactive = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14 9h1M19 9h2M3 9h2M9 9h1" />
  </svg>
);
export default SvgPanelTopInactive;
