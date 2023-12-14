import * as React from "react";
import type { SVGProps } from "react";
const SvgBarcode = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 5v14M8 5v14M12 5v14M17 5v14M21 5v14" />
  </svg>
);
export default SvgBarcode;
