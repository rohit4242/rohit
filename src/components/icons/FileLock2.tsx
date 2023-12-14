import * as React from "react";
import type { SVGProps } from "react";
const SvgFileLock2 = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" />
    <path d="M14 2v6h6" />
    <rect width={8} height={5} x={2} y={13} rx={1} />
    <path d="M8 13v-2a2 2 0 1 0-4 0v2" />
  </svg>
);
export default SvgFileLock2;
