import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function moveArrayItem<T>(arr: T[], from: number, to: number): T[] {
   const item = arr.splice(from, 1)[0];
   arr.splice(to, 0, item);
   return arr;
}
