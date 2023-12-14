import * as React from "react";
import type { SVGProps } from "react";
const SvgTramFront = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={16} height={16} x={4} y={3} rx={2} />
    <path d="M4 11h16M12 3v8M8 19l-2 3M18 22l-2-3M16 15" />
  </svg>
);
export default SvgTramFront;
