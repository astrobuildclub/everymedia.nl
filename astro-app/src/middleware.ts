import { defineMiddleware } from "astro:middleware";
import {
  PREVIEW_COOKIE,
  isValidPreviewCookie,
  runWithVisualEditing,
} from "./lib/sanity/visual-editing";

export const onRequest = defineMiddleware(async (context, next) => {
  // De ondertekende cookie is de beveiliging; Sec-Fetch-Dest beperkt het tot
  // de iframe van de Presentation tool.
  const hasPreviewCookie = isValidPreviewCookie(
    context.cookies.get(PREVIEW_COOKIE)?.value,
  );
  const inIframe = context.request.headers.get("sec-fetch-dest") === "iframe";
  const visualEditing = hasPreviewCookie && inIframe;
  context.locals.visualEditing = visualEditing;

  // Zo kan loadQuery() de status lezen zonder dat elke page of component
  // hem moet doorgeven.
  const response = await runWithVisualEditing(visualEditing, next);

  // Met preview-cookie nooit cachen: de inhoud verschilt per iframe/tab.
  if (hasPreviewCookie) {
    response.headers.set("Cache-Control", "private, no-store");
    response.headers.set("Vary", "Cookie, Sec-Fetch-Dest");
  }

  return response;
});
