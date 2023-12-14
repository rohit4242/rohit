import * as React from "react";
import type { SVGProps } from "react";
const SvgSettings2 = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M20 7h-9M14 17H5" />
    <circle cx={17} cy={17} r={3} />
    <circle cx={7} cy={7} r={3} />
  </svg>
);
export default SvgSettings2;
