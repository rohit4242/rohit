import * as React from "react";
import type { SVGProps } from "react";
const SvgGavel = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10M16 16l6-6M8 8l6-6M9 7l8 8M21 11l-8-8" />
  </svg>
);
export default SvgGavel;
