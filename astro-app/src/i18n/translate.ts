import common from "./staticTranslations/common";

type Keys = keyof typeof common; 
type Locale = string;

export const getTranslation = (locale: Locale) => {
  const t = (key: Keys): string => {
    // @ts-ignore
    const translation = common[key][locale];
    return translation || `MISSING TRANSLATION for key: ${key}`;
  };
  
  return { t };
};
