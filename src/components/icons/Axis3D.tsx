import * as React from "react";
import type { SVGProps } from "react";
const SvgAxis3D = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 4v16h16M4 20l7-7" />
  </svg>
);
export default SvgAxis3D;
