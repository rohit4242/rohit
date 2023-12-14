import * as React from "react";
import type { SVGProps } from "react";
const SvgBugOff = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2M14.12 3.88 16 2" />
    <path d="M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" />
    <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4M2 2l20 20M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13M12 20v-8M6 13H2" />
    <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
  </svg>
);
export default SvgBugOff;
