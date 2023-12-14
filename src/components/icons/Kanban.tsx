import * as React from "react";
import type { SVGProps } from "react";
const SvgKanban = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 5v11M12 5v6M18 5v14" />
  </svg>
);
export default SvgKanban;
