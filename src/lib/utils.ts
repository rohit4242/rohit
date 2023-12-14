import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// export const readSvgDirectory = (
//   directory: string, 
//   fileExtension: string = '.svg'
// ): string[] => {
//   return readdirSync(directory).filter((file) => 
//     path.extname(file) === fileExtension
//   );
// }