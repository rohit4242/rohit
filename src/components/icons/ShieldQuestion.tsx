import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldQuestion = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3M12 17h.01" />
  </svg>
);
export default SvgShieldQuestion;
