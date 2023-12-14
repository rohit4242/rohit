import * as React from "react";
import type { SVGProps } from "react";
const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 3v3M18.5 13h-13L2 9.5 5.5 6h13L22 9.5ZM12 13v8" />
  </svg>
);
export default SvgSignpost;
