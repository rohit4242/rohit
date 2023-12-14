import * as React from "react";
import type { SVGProps } from "react";
const SvgBookDashed = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M20 22h-2M20 15v2h-2M4 19.5V15M20 8v3M18 2h2v2M4 11V9M12 2h2M12 22h2M12 17h2M8 22H6.5a2.5 2.5 0 0 1 0-5H8M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" />
  </svg>
);
export default SvgBookDashed;
