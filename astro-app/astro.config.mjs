// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";


const defaultLanguage = { id: 'en', title: 'English' };

const supportedLanguages = [
  defaultLanguage,
  // { id: 'nl', title: 'Dutch' },
];

const supportedLocales = supportedLanguages.map((item) => item.id);

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
  ],
  vite: {
    plugins: [],
  },
  i18n: {
    locales: supportedLocales,
    defaultLocale: defaultLanguage.id,
  },
});
