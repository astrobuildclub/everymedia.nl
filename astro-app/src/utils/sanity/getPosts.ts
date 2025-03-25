//// filepath: astro-app/src/utils/sanity/getPosts.ts
import groq from "groq";
import { sanityClient } from "sanity:client";
import type { Post } from "./types"; // You can define a common Post type

export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}