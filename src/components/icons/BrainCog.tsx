import * as React from "react";
import type { SVGProps } from "react";
const SvgBrainCog = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={3} />
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5M15.7 10.4l-.9.4M9.2 13.2l-.9.4M13.6 15.7l-.4-.9M10.8 9.2l-.4-.9M15.7 13.5l-.9-.4M9.2 10.9l-.9-.4M10.5 15.7l.4-.9M13.1 9.2l.4-.9" />
  </svg>
);
export default SvgBrainCog;