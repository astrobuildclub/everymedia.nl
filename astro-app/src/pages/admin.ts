import type { APIRoute } from "astro";
import { sanityStudioUrl } from "../lib/sanity/config";

export const prerender = false;

// Vaste korte link naar het CMS. De Studio draait (nog) op Sanity-hosting;
// 302 zodat /admin later een ingebouwde Studio kan worden (SANITY.md §0).
export const GET: APIRoute = ({ redirect }) => redirect(sanityStudioUrl, 302);
