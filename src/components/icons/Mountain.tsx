import * as React from "react";
import type { SVGProps } from "react";
const SvgMountain = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m8 3 4 8 5-5 5 15H2z" />
  </svg>
);
export default SvgMountain;
