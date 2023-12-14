import * as React from "react";
import type { SVGProps } from "react";
const SvgPilcrowSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={18} x={3} y={3} rx={2} />
    <path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17M12 7v10M16 7v10" />
  </svg>
);
export default SvgPilcrowSquare;
