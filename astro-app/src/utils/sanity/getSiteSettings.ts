//// filepath: astro-app/src/utils/sanity/getSiteSettings.ts
import groq from "groq";
import { sanityClient } from "sanity:client";
import type { SiteSettings } from "./types";

export async function getSiteSettings(): Promise<SiteSettings> {
  return await sanityClient.fetch(
    groq`*[_type == "siteSettings"][0]`
  );
}