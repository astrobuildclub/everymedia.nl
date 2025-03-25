//// filepath: astro-app/src/utils/sanity/getProjects.ts
import groq from "groq";
import { sanityClient } from "sanity:client";
import type { Project } from "./types";

export async function getProjects(): Promise<Project[]> {
  return await sanityClient.fetch(
    groq`*[_type == "project"] | order(_createdAt desc)`
  );
}