import { clsx, type ClassValue } from "clsx";


export function cn(...inputs: ClassValue[]) {
  return (clsx(inputs));
}

export const generateFormattedIndex = (index: number) => {
  const updatedCount = index + 1;
  const formattedIndex = updatedCount < 10 ? `0${updatedCount}` : updatedCount;
  return formattedIndex;
};

export const defaultLanguage =  { id: 'nl', title: 'Dutch' };

export const supportedLanguages = [
  defaultLanguage,
];