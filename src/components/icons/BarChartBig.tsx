import * as React from "react";
import type { SVGProps } from "react";
const SvgBarChartBig = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={4} height={7} x={7} y={10} rx={1} />
    <rect width={4} height={12} x={15} y={5} rx={1} />
  </svg>
);
export default SvgBarChartBig;
