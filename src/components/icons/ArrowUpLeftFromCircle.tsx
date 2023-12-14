import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpLeftFromCircle = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 8V2h6M2 2l10 10M12 2A10 10 0 1 1 2 12" />
  </svg>
);
export default SvgArrowUpLeftFromCircle;
