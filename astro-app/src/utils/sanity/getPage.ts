//// filepath: astro-app/src/utils/sanity/getPage.ts
import groq from "groq";
import { sanityClient } from "sanity:client";
import type { Page } from "./types";

export async function getPage(slug: string): Promise<Page> {
  return await sanityClient.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]`,
    { slug }
  );
}