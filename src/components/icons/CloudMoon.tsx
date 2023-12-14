import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudMoon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6ZM10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197" />
  </svg>
);
export default SvgCloudMoon;
