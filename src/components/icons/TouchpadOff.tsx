import * as React from "react";
import type { SVGProps } from "react";
const SvgTouchpadOff = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16M2 14h12M22 14h-2M12 20v-6M2 2l20 20M22 16V6a2 2 0 0 0-2-2H10" />
  </svg>
);
export default SvgTouchpadOff;
