import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpToLine = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M5 3h14M18 13l-6-6-6 6M12 7v14" />
  </svg>
);
export default SvgArrowUpToLine;
