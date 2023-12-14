import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitorOff = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2M22 15V5a2 2 0 0 0-2-2H9M8 21h8M12 17v4M2 2l20 20" />
  </svg>
);
export default SvgMonitorOff;
