// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { defaultLanguage, supportedLocales } from "./src/lib/helperFunctions";
import sanityIntegration from "@sanity/astro";
import {
  apiVersion,
  dataset,
  projectId,
  sanityStudioUrl,
  useCdn,
} from "./src/lib/sanity";
import netlify from "@astrojs/netlify";

const defaultLocale = defaultLanguage.id;

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    react(),
    sanityIntegration({
      projectId: projectId,
      dataset: dataset,
      apiVersion: apiVersion,
      useCdn: useCdn,
      stega: {
        studioUrl: sanityStudioUrl,
      },
    }),
  ],
  vite: {
    plugins: [],
    resolve: {
      // React 18 heeft geen react/compiler-runtime export; Sanity/Vite verwachten die soms wel.
      alias: {
        "react/compiler-runtime": "react-compiler-runtime",
      },
    },
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
