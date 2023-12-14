import * as React from "react";
import type { SVGProps } from "react";
const SvgGrab = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5M6 14a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
    <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
  </svg>
);
export default SvgGrab;
