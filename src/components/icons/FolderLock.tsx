import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderLock = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={8} height={5} x={14} y={17} rx={1} />
    <path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" />
    <path d="M20 17v-2a2 2 0 1 0-4 0v2" />
  </svg>
);
export default SvgFolderLock;
