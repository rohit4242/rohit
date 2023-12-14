import * as React from "react";
import type { SVGProps } from "react";
const SvgListTodo = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={6} height={6} x={3} y={5} rx={1} />
    <path d="m3 17 2 2 4-4M13 6h8M13 12h8M13 18h8" />
  </svg>
);
export default SvgListTodo;
