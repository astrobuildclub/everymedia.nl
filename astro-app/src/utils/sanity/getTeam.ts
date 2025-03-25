//// filepath: astro-app/src/utils/sanity/getTeam.ts
import groq from "groq";
import { sanityClient } from "sanity:client";
import type { TeamMember } from "./types";

export async function getTeam(): Promise<TeamMember[]> {
  return await sanityClient.fetch(
    groq`*[_type == "team"] | order(_createdAt desc)`
  );
}