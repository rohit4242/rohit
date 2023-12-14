import * as React from "react";
import type { SVGProps } from "react";
const SvgLigature = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2M6 12h4M14 12h2v8M6 20h4M14 20h4" />
  </svg>
);
export default SvgLigature;
