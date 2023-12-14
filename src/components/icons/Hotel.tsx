import * as React from "react";
import type { SVGProps } from "react";
const SvgHotel = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2" />
    <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16M8 7h.01M16 7h.01M12 7h.01M12 11h.01M16 11h.01M8 11h.01M10 22v-6.5m4 0V22" />
  </svg>
);
export default SvgHotel;
