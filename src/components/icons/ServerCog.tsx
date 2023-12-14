import * as React from "react";
import type { SVGProps } from "react";
const SvgServerCog = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={3} />
    <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5M6 6h.01M6 18h.01M15.7 13.4l-.9-.3M9.2 10.9l-.9-.3M10.6 15.7l.3-.9M13.6 15.7l-.4-1M10.8 9.3l-.4-1M8.3 13.6l1-.4M14.7 10.8l1-.4M13.4 8.3l-.3.9" />
  </svg>
);
export default SvgServerCog;
