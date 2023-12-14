import * as React from "react";
import type { SVGProps } from "react";
const SvgGrip = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={5} r={1} />
    <circle cx={19} cy={5} r={1} />
    <circle cx={5} cy={5} r={1} />
    <circle cx={12} cy={12} r={1} />
    <circle cx={19} cy={12} r={1} />
    <circle cx={5} cy={12} r={1} />
    <circle cx={12} cy={19} r={1} />
    <circle cx={19} cy={19} r={1} />
    <circle cx={5} cy={19} r={1} />
  </svg>
);
export default SvgGrip;
