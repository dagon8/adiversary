import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const playSound = (sound: string) => {
  const audio = new Audio(sound);
  audio.play();
};
