import * as React from "react";
import type { SVGProps } from "react";
const SvgFerrisWheel = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={2} />
    <path d="M12 2v4M6.8 15l-3.5 2M20.7 7l-3.5 2M6.8 9 3.3 7M20.7 17l-3.5-2M9 22l3-8 3 8M8 22h8" />
    <path d="M18 18.7a9 9 0 1 0-12 0" />
  </svg>
);
export default SvgFerrisWheel;
