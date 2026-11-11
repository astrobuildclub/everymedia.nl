import type { APIRoute } from "astro";
import { sanityClient } from "sanity:client";
import { validatePreviewUrl } from "@sanity/preview-url-secret";
import {
  PREVIEW_COOKIE,
  PREVIEW_MAX_AGE,
  createPreviewCookieValue,
} from "../../lib/sanity/visual-editing";

export const prerender = false;

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const token = import.meta.env.SANITY_API_READ_TOKEN;
  if (!token) {
    return new Response("SANITY_API_READ_TOKEN ontbreekt", { status: 500 });
  }

  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    sanityClient.withConfig({ token }),
    request.url,
  );

  if (!isValid) {
    return new Response("Ongeldig preview-secret", { status: 401 });
  }

  cookies.set(PREVIEW_COOKIE, createPreviewCookieValue(token), {
    path: "/",
    maxAge: PREVIEW_MAX_AGE,
    httpOnly: true,
    secure: import.meta.env.PROD,
    // De Studio draait op every-media.sanity.studio (ander domein): in productie 'none'.
    sameSite: import.meta.env.PROD ? "none" : "lax",
  });

  return redirect(redirectTo, 307);
};
