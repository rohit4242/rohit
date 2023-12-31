import * as React from "react";
import type { SVGProps } from "react";
const SvgFilePieChart = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
    <path d="M14 2v6h6M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" />
    <path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16z" />
  </svg>
);
export default SvgFilePieChart;
