import * as React from "react";
import type { SVGProps } from "react";
const SvgStepForward = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 4v16M10 4l10 8-10 8z" />
  </svg>
);
export default SvgStepForward;
