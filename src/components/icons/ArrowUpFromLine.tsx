import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpFromLine = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m18 9-6-6-6 6M12 3v14M5 21h14" />
  </svg>
);
export default SvgArrowUpFromLine;
