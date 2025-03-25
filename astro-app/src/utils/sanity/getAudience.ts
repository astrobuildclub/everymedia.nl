//// filepath: astro-app/src/utils/sanity/getAudience.ts
import groq from "groq";
import { sanityClient } from "sanity:client";
import type { Audience } from "./types";

export async function getAudience(slug: string): Promise<Audience> {
  return await sanityClient.fetch(
    groq`*[_type == "audience" && slug.current == $slug][0]`,
    { slug }
  );
}