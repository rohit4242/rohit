import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={20} height={16} x={2} y={4} rx={2} ry={2} />
    <path d="M6 8h.001M10 8zM14 8zM18 8h.001M8 12zM12 12zM16 12h.001M7 16h10" />
  </svg>
);
export default SvgKeyboard;
