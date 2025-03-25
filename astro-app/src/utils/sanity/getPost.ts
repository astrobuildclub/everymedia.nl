//// filepath: astro-app/src/utils/sanity/getPost.ts
import groq from "groq";
import { sanityClient } from "sanity:client";
import type { Post } from "./types";

export async function getPost(slug: string): Promise<Post> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );
}