import * as React from "react";
import type { SVGProps } from "react";
const SvgVolume = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11 5 6 9H2v6h4l5 4z" />
  </svg>
);
export default SvgVolume;
