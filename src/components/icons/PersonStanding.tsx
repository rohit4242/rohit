import * as React from "react";
import type { SVGProps } from "react";
const SvgPersonStanding = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m9 20 3-6 3 6M6 8l6 2 6-2M12 10v4" />
  </svg>
);
export default SvgPersonStanding;
