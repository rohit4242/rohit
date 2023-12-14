import * as React from "react";
import type { SVGProps } from "react";
const SvgBrainCircuit = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20zM16 8V5c0-1.1.9-2 2-2M12 13h4" />
    <path d="M12 18h6a2 2 0 0 1 2 2v1M12 8h8M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
    <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
  </svg>
);
export default SvgBrainCircuit;
