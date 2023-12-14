import * as React from "react";
import type { SVGProps } from "react";
const SvgListVideo = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 12H3M16 6H3M12 18H3M16 12l5 3-5 3z" />
  </svg>
);
export default SvgListVideo;
