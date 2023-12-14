import * as React from "react";
import type { SVGProps } from "react";
const SvgFileType2 = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
    <path d="M14 2v6h6M2 13v-1h6v1M4 18h2M5 12v6" />
  </svg>
);
export default SvgFileType2;
