import * as React from "react";
import type { SVGProps } from "react";
const SvgSandwich = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83M3 11l7.77-6.04a2 2 0 0 1 2.46 0L21 11z" />
    <path d="M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27" />
  </svg>
);
export default SvgSandwich;
