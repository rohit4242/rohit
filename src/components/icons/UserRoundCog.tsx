import * as React from "react";
import type { SVGProps } from "react";
const SvgUserRoundCog = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 21a8 8 0 0 1 10.434-7.62" />
    <circle cx={10} cy={8} r={5} />
    <circle cx={18} cy={18} r={3} />
    <path d="m19.5 14.3-.4.9M16.9 20.8l-.4.9M21.7 19.5l-.9-.4M15.2 16.9l-.9-.4M21.7 16.5l-.9.4M15.2 19.1l-.9.4M19.5 21.7l-.4-.9M16.9 15.2l-.4-.9" />
  </svg>
);
export default SvgUserRoundCog;
