import * as React from "react";
import type { SVGProps } from "react";
const SvgRadioReceiver = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M5 16v2M19 16v2" />
    <rect width={20} height={8} x={2} y={8} rx={2} />
    <path d="M18 12" />
  </svg>
);
export default SvgRadioReceiver;
