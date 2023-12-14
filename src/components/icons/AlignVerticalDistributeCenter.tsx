import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignVerticalDistributeCenter = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={14} height={6} x={5} y={14} rx={2} />
    <rect width={10} height={6} x={7} y={4} rx={2} />
    <path d="M22 7h-5M7 7H1M22 17h-3M5 17H2" />
  </svg>
);
export default SvgAlignVerticalDistributeCenter;
