import * as React from "react";
import type { SVGProps } from "react";
const SvgGitPullRequestArrow = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M5 9v12" />
    <circle cx={19} cy={18} r={3} />
    <path d="m15 9-3-3 3-3" />
    <path d="M12 6h5a2 2 0 0 1 2 2v7" />
  </svg>
);
export default SvgGitPullRequestArrow;
