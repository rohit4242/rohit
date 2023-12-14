import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftCircle = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={10} />
    <path d="M16 12H8M12 8l-4 4 4 4" />
  </svg>
);
export default SvgArrowLeftCircle;
