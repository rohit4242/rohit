import * as React from "react";
import type { SVGProps } from "react";
const SvgCandlestickChart = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9 5v4" />
    <rect width={4} height={6} x={7} y={9} rx={1} />
    <path d="M9 15v2M17 3v2" />
    <rect width={4} height={8} x={15} y={5} rx={1} />
    <path d="M17 13v3M3 3v18h18" />
  </svg>
);
export default SvgCandlestickChart;
