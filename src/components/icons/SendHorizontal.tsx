import * as React from "react";
import type { SVGProps } from "react";
const SvgSendHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m3 3 3 9-3 9 19-9ZM6 12h16" />
  </svg>
);
export default SvgSendHorizontal;
