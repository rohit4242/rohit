import * as React from "react";
import type { SVGProps } from "react";
const SvgGripHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={9} r={1} />
    <circle cx={19} cy={9} r={1} />
    <circle cx={5} cy={9} r={1} />
    <circle cx={12} cy={15} r={1} />
    <circle cx={19} cy={15} r={1} />
    <circle cx={5} cy={15} r={1} />
  </svg>
);
export default SvgGripHorizontal;
