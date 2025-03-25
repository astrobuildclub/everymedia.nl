//// filepath: astro-app/src/utils/sanity/getAudiences.ts
import groq from "groq";
import { sanityClient } from "sanity:client";
import type { Audience } from "./types";

export async function getAudiences(): Promise<Audience[]> {
  return await sanityClient.fetch(
    groq`*[_type == "audience"] | order(_createdAt desc)`
  );
}