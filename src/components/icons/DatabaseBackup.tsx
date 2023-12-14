import * as React from "react";
import type { SVGProps } from "react";
const SvgDatabaseBackup = (props: SVGProps<SVGSVGElement>) => (
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
    <ellipse cx={12} cy={5} rx={9} ry={3} />
    <path d="M3 12a9 3 0 0 0 5 2.69M21 9.3V5" />
    <path d="M3 5v14a9 3 0 0 0 6.47 2.88M12 12v4h4" />
    <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
  </svg>
);
export default SvgDatabaseBackup;
