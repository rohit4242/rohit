import * as React from "react";
import type { SVGProps } from "react";
const SvgGanttChart = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8 6h10M6 12h9M11 18h7" />
  </svg>
);
export default SvgGanttChart;
