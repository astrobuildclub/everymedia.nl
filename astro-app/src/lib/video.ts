import { stegaClean } from "@sanity/client/stega";

export type VideoSource = {
  src: string;
  /** MIME-type voor <source>, alleen als die zeker is. */
  type?: string;
};

const MIME_BY_EXTENSION: Record<string, string> = {
  mp4: "video/mp4",
  m4v: "video/mp4",
  webm: "video/webm",
  m3u8: "application/vnd.apple.mpegurl",
};

/**
 * Een Vimeo-pagina of -player-link (vimeo.com/123, player.vimeo.com/video/123)
 * is geen videobestand en kan niet in een <video>-element afspelen.
 * Directe Vimeo-bestandslinks (player.vimeo.com/progressive_redirect/…/file.mp4,
 * player.vimeo.com/external/….mp4) zijn wél geldig.
 */
export const isVimeoPageUrl = (url: URL) => {
  const host = url.hostname.replace(/^www\./, "");
  if (host === "vimeo.com") return true;
  return host === "player.vimeo.com" && url.pathname.startsWith("/video/");
};

/**
 * Zet een video-URL uit Sanity om naar een bruikbare <source>.
 * Geeft `null` terug als de URL niet als videobestand kan afspelen.
 */
export function resolveVideoSource(rawUrl?: string | null): VideoSource | null {
  // Stega (visual editing) kan onzichtbare tekens aan strings toevoegen.
  const value = stegaClean(rawUrl || "").trim();
  if (!value) return null;

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }

  if (isVimeoPageUrl(url)) {
    console.warn(
      `[video] "${value}" is een Vimeo-pagina, geen videobestand. Gebruik de directe "video file link" (…/progressive_redirect/…/file.mp4).`
    );
    return null;
  }

  const extension = url.pathname.split(".").pop()?.toLowerCase() || "";
  // Onbekende extensie: geen type meegeven, de browser bepaalt het zelf.
  return { src: value, type: MIME_BY_EXTENSION[extension] };
}
