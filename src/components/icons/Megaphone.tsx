import * as React from "react";
import type { SVGProps } from "react";
const SvgMegaphone = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m3 11 18-5v12L3 14zM11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </svg>
);
export default SvgMegaphone;
