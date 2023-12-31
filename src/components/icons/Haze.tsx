import * as React from "react";
import type { SVGProps } from "react";
const SvgHaze = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m5.2 6.2 1.4 1.4M2 13h2M20 13h2M17.4 7.6l1.4-1.4M22 17H2M22 21H2M16 13a4 4 0 0 0-8 0M12 5V2.5" />
  </svg>
);
export default SvgHaze;
