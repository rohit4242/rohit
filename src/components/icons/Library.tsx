import * as React from "react";
import type { SVGProps } from "react";
const SvgLibrary = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m16 6 4 14M12 6v14M8 8v12M4 4v16" />
  </svg>
);
export default SvgLibrary;
