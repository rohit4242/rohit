import * as React from "react";
import type { SVGProps } from "react";
const SvgFileLock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z" />
    <rect width={8} height={6} x={8} y={12} rx={1} />
    <path d="M15 12v-2a3 3 0 1 0-6 0v2" />
  </svg>
);
export default SvgFileLock;
