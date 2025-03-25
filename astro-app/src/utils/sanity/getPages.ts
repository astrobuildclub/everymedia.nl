//// filepath: astro-app/src/utils/sanity/getPages.ts
import groq from "groq";
import { sanityClient } from "sanity:client";
import type { Page } from "./types";

export async function getPages(): Promise<Page[]> {
  return await sanityClient.fetch(
    groq`*[_type == "page"] | order(_createdAt desc)`
  );
}