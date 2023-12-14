import * as React from "react";
import type { SVGProps } from "react";
const SvgContact = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
    <rect width={18} height={18} x={3} y={4} rx={2} />
    <circle cx={12} cy={10} r={2} />
    <path d="M8 2v2M16 2v2" />
  </svg>
);
export default SvgContact;
