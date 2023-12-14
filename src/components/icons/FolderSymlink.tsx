import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderSymlink = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2" />
    <path d="m8 16 3-3-3-3" />
    <path d="M2 16v-1a2 2 0 0 1 2-2h6" />
  </svg>
);
export default SvgFolderSymlink;
