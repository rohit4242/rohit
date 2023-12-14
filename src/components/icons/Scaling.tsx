import * as React from "react";
import type { SVGProps } from "react";
const SvgScaling = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21 3 9 15M12 3H3v18h18v-9M16 3h5v5" />
    <path d="M14 15H9v-5" />
  </svg>
);
export default SvgScaling;
