import * as React from "react";
import type { SVGProps } from "react";
const SvgMousePointerClick = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m9 9 5 12 1.8-5.2L21 14ZM7.2 2.2 8 5.1M5.1 8l-2.9-.8M14 4.1 12 6M6 12l-1.9 2" />
  </svg>
);
export default SvgMousePointerClick;
