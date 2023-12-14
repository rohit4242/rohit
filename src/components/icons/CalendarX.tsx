import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarX = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
    <path d="M16 2v4M8 2v4M3 10h18M10 14l4 4M14 14l-4 4" />
  </svg>
);
export default SvgCalendarX;
