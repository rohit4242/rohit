import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownToLine = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 17V3M6 11l6 6 6-6M19 21H5" />
  </svg>
);
export default SvgArrowDownToLine;
