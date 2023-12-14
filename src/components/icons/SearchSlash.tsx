import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchSlash = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m13.5 8.5-5 5" />
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
export default SvgSearchSlash;
