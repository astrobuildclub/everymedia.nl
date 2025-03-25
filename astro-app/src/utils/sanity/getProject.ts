//// filepath: astro-app/src/utils/sanity/getProject.ts
import groq from "groq";
import { sanityClient } from "sanity:client";
import type { Project } from "./types";

export async function getProject(slug: string): Promise<Project> {
  return await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]`,
    { slug }
  );
}