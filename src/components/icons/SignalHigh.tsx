import * as React from "react";
import type { SVGProps } from "react";
const SvgSignalHigh = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8" />
  </svg>
);
export default SvgSignalHigh;
