import * as React from "react";
import type { SVGProps } from "react";
const SvgGitGraph = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={5} cy={6} r={3} />
    <path d="M5 9v6" />
    <circle cx={5} cy={18} r={3} />
    <path d="M12 3v18" />
    <circle cx={19} cy={6} r={3} />
    <path d="M16 15.7A9 9 0 0 0 19 9" />
  </svg>
);
export default SvgGitGraph;
