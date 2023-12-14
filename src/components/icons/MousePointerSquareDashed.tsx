import * as React from "react";
import type { SVGProps } from "react";
const SvgMousePointerSquareDashed = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M5 3a2 2 0 0 0-2 2M19 3a2 2 0 0 1 2 2M12 12l4 10 1.7-4.3L22 16ZM5 21a2 2 0 0 1-2-2M9 3h1M9 21h2M14 3h1M3 9v1M21 9v2M3 14v1" />
  </svg>
);
export default SvgMousePointerSquareDashed;
