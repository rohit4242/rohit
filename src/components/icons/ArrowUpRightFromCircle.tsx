import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpRightFromCircle = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M22 12A10 10 0 1 1 12 2M22 2 12 12M16 2h6v6" />
  </svg>
);
export default SvgArrowUpRightFromCircle;
