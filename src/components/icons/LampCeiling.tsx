import * as React from "react";
import type { SVGProps } from "react";
const SvgLampCeiling = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2v5M6 7h12l4 9H2zM9.17 16a3 3 0 1 0 5.66 0" />
  </svg>
);
export default SvgLampCeiling;
