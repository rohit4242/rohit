"use client";
import React, { useState } from "react";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import {  Accessibility, icons } from "@/lib/rohit";
import { TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";
import toast from "react-hot-toast";

const handleCopyIcon = (name: string) => {
  const svgElement = document.getElementById(name);
  if (svgElement) {
    const svgContent = svgElement.outerHTML;
    navigator.clipboard.writeText(svgContent);
    toast.success(`Copied ${name}`);
  }
};

export default function Home() {
  const [iconWidth, setIconWidth] = useState(24); // Initial width

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = parseInt(e.target.value);
    setIconWidth(newWidth);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-950">
      <h1 className="text-6xl my-4 p-2 font-medium text-center text-teal-500">
        Our First Own SVG Icons Library
      </h1>
      <div className="flex justify-center my-8 ">
        <span className="text-sm mr-4">Icon Width:</span>
        <input
          type="range"
          min={16}
          max={64}
          value={iconWidth}
          className="w-44 "
        
          onChange={handleWidthChange}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2">
        <TooltipProvider>
          {Object.entries(icons).map(([name, IconComponent]) => (
            <Tooltip key={name}>
              <TooltipTrigger>
                <div
                  className={`bg-slate-900 p-4 rounded-md hover:scale-105 hover:bg-gray-500/80`}
                  onClick={() => handleCopyIcon(name)}
                  key={name}
                  id={name}
                >
                  <IconComponent key={name} width={iconWidth} color="white" />
                </div>
              </TooltipTrigger>

              <TooltipContent
                side="bottom"
                className="bg-teal-400 p-1 rounded-lg flex justify-center items-center gap-2"
              >
                <p>{name}</p>
                <span className="text-sm ">{`${iconWidth}px`}</span>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </main>
  );
}
