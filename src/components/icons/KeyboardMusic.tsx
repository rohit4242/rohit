import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyboardMusic = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={20} height={16} x={2} y={4} rx={2} />
    <path d="M6 8h4M14 8h.01M18 8h.01M2 12h20M6 12v4M10 12v4M14 12v4M18 12v4" />
  </svg>
);
export default SvgKeyboardMusic;
