import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartphoneNfc = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={7} height={12} x={2} y={6} rx={1} />
    <path d="M13 8.32a7.43 7.43 0 0 1 0 7.36M16.46 6.21a11.76 11.76 0 0 1 0 11.58M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
  </svg>
);
export default SvgSmartphoneNfc;
