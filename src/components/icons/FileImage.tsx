import * as React from "react";
import type { SVGProps } from "react";
const SvgFileImage = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z" />
    <path d="M14 2v6h6" />
    <circle cx={10} cy={13} r={2} />
    <path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22" />
  </svg>
);
export default SvgFileImage;
