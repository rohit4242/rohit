import * as React from "react";
import type { SVGProps } from "react";
const SvgUserRoundX = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 21a8 8 0 0 1 11.873-7" />
    <circle cx={10} cy={8} r={5} />
    <path d="m17 17 5 5M22 17l-5 5" />
  </svg>
);
export default SvgUserRoundX;
