import * as React from "react";
import type { SVGProps } from "react";
const SvgAreaChart = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 3v18h18" />
    <path d="M7 12v5h12V8l-5 5-4-4Z" />
  </svg>
);
export default SvgAreaChart;
