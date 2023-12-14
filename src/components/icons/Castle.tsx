import * as React from "react";
import type { SVGProps } from "react";
const SvgCastle = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2M18 11V4H6v7" />
    <path d="M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4M22 11V9M2 11V9M6 4V2M18 4V2M10 4V2M14 4V2" />
  </svg>
);
export default SvgCastle;
