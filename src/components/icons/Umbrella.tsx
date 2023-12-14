import * as React from "react";
import type { SVGProps } from "react";
const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M22 12a10.06 10.06 1 0 0-20 0ZM12 12v8a2 2 0 0 0 4 0M12 2v1" />
  </svg>
);
export default SvgUmbrella;
