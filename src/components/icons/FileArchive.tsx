import * as React from "react";
import type { SVGProps } from "react";
const SvgFileArchive = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2" />
    <path d="M14 2v6h6" />
    <circle cx={10} cy={20} r={2} />
    <path d="M10 7V6M10 12v-1M10 18v-2" />
  </svg>
);
export default SvgFileArchive;
