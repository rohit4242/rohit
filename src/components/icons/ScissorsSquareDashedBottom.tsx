import * as React from "react";
import type { SVGProps } from "react";
const SvgScissorsSquareDashedBottom = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M10 22H8M16 22h-2" />
    <circle cx={8} cy={8} r={2} />
    <path d="M9.414 9.414 12 12M14.8 14.8 18 18" />
    <circle cx={8} cy={16} r={2} />
    <path d="m18 6-8.586 8.586" />
  </svg>
);
export default SvgScissorsSquareDashedBottom;
