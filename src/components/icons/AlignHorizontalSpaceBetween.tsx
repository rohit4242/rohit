import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignHorizontalSpaceBetween = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={6} height={14} x={3} y={5} rx={2} />
    <rect width={6} height={10} x={15} y={7} rx={2} />
    <path d="M3 2v20M21 2v20" />
  </svg>
);
export default SvgAlignHorizontalSpaceBetween;
