import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitorPlay = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m10 7 5 3-5 3Z" />
    <rect width={20} height={14} x={2} y={3} rx={2} />
    <path d="M12 17v4M8 21h8" />
  </svg>
);
export default SvgMonitorPlay;
