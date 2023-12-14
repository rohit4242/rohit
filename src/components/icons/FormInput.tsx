import * as React from "react";
import type { SVGProps } from "react";
const SvgFormInput = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={20} height={12} x={2} y={6} rx={2} />
    <path d="M12 12h.01M17 12h.01M7 12h.01" />
  </svg>
);
export default SvgFormInput;
