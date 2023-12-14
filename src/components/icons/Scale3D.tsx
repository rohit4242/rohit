import * as React from "react";
import type { SVGProps } from "react";
const SvgScale3D = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={19} cy={19} r={2} />
    <circle cx={5} cy={5} r={2} />
    <path d="M5 7v12h12M5 19l6-6" />
  </svg>
);
export default SvgScale3D;
