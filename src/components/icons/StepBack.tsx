import * as React from "react";
import type { SVGProps } from "react";
const SvgStepBack = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M18 20V4M14 20 4 12l10-8z" />
  </svg>
);
export default SvgStepBack;
