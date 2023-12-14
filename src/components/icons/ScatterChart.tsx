import * as React from "react";
import type { SVGProps } from "react";
const SvgScatterChart = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={7.5} cy={7.5} r={0.5} />
    <circle cx={18.5} cy={5.5} r={0.5} />
    <circle cx={11.5} cy={11.5} r={0.5} />
    <circle cx={7.5} cy={16.5} r={0.5} />
    <circle cx={17.5} cy={14.5} r={0.5} />
    <path d="M3 3v18h18" />
  </svg>
);
export default SvgScatterChart;
