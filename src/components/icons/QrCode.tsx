import * as React from "react";
import type { SVGProps } from "react";
const SvgQrCode = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={5} height={5} x={3} y={3} rx={1} />
    <rect width={5} height={5} x={16} y={3} rx={1} />
    <rect width={5} height={5} x={3} y={16} rx={1} />
    <path d="M21 16h-3a2 2 0 0 0-2 2v3M21 21v.01M12 7v3a2 2 0 0 1-2 2H7M3 12h.01M12 3h.01M12 16v.01M16 12h1M21 12v.01M12 21v-1" />
  </svg>
);
export default SvgQrCode;
