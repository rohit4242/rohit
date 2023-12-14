import * as React from "react";
import type { SVGProps } from "react";
const SvgFileAudio = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3" />
    <path d="M14 2v6h6M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0" />
    <path d="M2 19v-3a6 6 0 0 1 12 0v3" />
  </svg>
);
export default SvgFileAudio;
