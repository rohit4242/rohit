import * as React from "react";
import type { SVGProps } from "react";
const SvgReplyAll = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m7 17-5-5 5-5M12 17l-5-5 5-5" />
    <path d="M22 18v-2a4 4 0 0 0-4-4H7" />
  </svg>
);
export default SvgReplyAll;
