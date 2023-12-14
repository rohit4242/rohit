import * as React from "react";
import type { SVGProps } from "react";
const SvgParkingMeter = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9 9a3 3 0 1 1 6 0M12 12v3M11 15h2" />
    <path d="M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3M12 19v3" />
  </svg>
);
export default SvgParkingMeter;
