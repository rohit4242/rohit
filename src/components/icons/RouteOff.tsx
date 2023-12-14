import * as React from "react";
import type { SVGProps } from "react";
const SvgRouteOff = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={6} cy={19} r={3} />
    <path d="M9 19h8.5c.4 0 .9-.1 1.3-.2M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12M2 2l20 20M21 15.3a3.5 3.5 0 0 0-3.3-3.3M15 5h-4.3" />
    <circle cx={18} cy={5} r={3} />
  </svg>
);
export default SvgRouteOff;
