import * as React from "react";
import type { SVGProps } from "react";
const SvgToyBrick = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={12} x={3} y={8} rx={1} />
    <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
  </svg>
);
export default SvgToyBrick;
