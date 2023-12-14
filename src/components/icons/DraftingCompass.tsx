import * as React from "react";
import type { SVGProps } from "react";
const SvgDraftingCompass = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={5} r={2} />
    <path d="m3 21 8.02-14.26M12.99 6.74l1.93 3.44M19 12c-3.87 4-10.13 4-14 0M21 21l-2.16-3.84" />
  </svg>
);
export default SvgDraftingCompass;
