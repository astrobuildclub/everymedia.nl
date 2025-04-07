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

export const supportedLocales = supportedLanguages.map((item) => item.id);

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  const isSupported = supportedLanguages?.some((l) => l?.id === lang);
  return isSupported ? lang : defaultLanguage.id;
}

export const formatDynamicLayout = <T>(items: T[], pattern: number[]): T[][] => {
  const result: T[][] = [];
  let i = 0;
  let patternIndex = 0;

  while (i < items?.length) {
    const groupSize = pattern[patternIndex % pattern?.length];
    result?.push(items?.slice(i, i + groupSize));
    i += groupSize;
    patternIndex++;
  }

  return result;
};
