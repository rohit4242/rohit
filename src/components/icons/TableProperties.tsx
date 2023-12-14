import * as React from "react";
import type { SVGProps } from "react";
const SvgTableProperties = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 3v18" />
    <rect width={18} height={18} x={3} y={3} rx={2} />
    <path d="M21 9H3M21 15H3" />
  </svg>
);
export default SvgTableProperties;
