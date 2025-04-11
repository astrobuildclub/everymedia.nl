// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { defaultLanguage, supportedLocales } from "./src/lib/helperFunctions";
import sanityIntegration from "@sanity/astro";
import { apiVersion, dataset, projectId, useCdn } from "./src/lib/sanity";


const defaultLocale = defaultLanguage.id;

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanityIntegration({
      projectId: projectId,
      dataset: dataset,
      apiVersion: apiVersion,
      useCdn: useCdn,
      stega: {
        studioUrl: import.meta.env.PUBLIC_SANITY_STUDIO_URL || "http://localhost:3333",
      },
    }),
  ],
  vite: {
    plugins: [],
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  i18n: {
    locales: supportedLocales,
    defaultLocale: defaultLocale,
  },
});
