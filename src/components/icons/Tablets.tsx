import * as React from "react";
import type { SVGProps } from "react";
const SvgTablets = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={7} cy={7} r={5} />
    <circle cx={17} cy={17} r={5} />
    <path d="M12 17h10M3.46 10.54l7.08-7.08" />
  </svg>
);
export default SvgTablets;
