import { supportedLocales } from "../lib/helperFunctions";
import { loadQuery } from "../lib/load-query";
import { sitemapQuery } from "../utils";

export interface SitemapEntry {
  url: string;
  imageUrl?: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export interface SanityData {
  locUrl: string;
  _updatedAt: string;
  imageUrl?: string;
}

const siteUrl = import.meta.env.VITE_SITE_URL || "http://localhost:4321"

const defaultSitemapEntries: SitemapEntry[] = supportedLocales?.map(
  (locale) => {
    return {
      url: `${siteUrl}/${locale}`,
      priority: 1,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
    };
  }
);

export const generateSitemapXml = (entries: SitemapEntry[]) => {
  const sitemapXmlEntries = entries
    .map((entry) => {
      return `
        <url>
         <loc>${entry?.url}</loc>
          ${entry.lastModified ? `<lastmod>${entry.lastModified}</lastmod>` : ""}
          ${entry.priority ? `<priority>${entry.priority}</priority>` : ""}
          ${entry.imageUrl ? `<image:image><image:loc>${entry.imageUrl}</image:loc></image:image>` : ""}
        </url>
        `;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >
      ${sitemapXmlEntries}
    </urlset>
    `;
};

export async function GET() {
  const { data: sanityData } = await loadQuery<SanityData[]>({
    query: sitemapQuery.query.groqQuery,
  });

  const dynamicEntries: SitemapEntry[] = sanityData?.map((route) => {
    return {
      url: `${siteUrl}/${route?.locUrl}`,
      lastModified: new Date(route._updatedAt).toISOString(),
      priority: 0.5,
      imageUrl: route?.imageUrl,
    };
  });

  const sitemapEntries = [...defaultSitemapEntries, ...dynamicEntries];
  const sitemapXml = generateSitemapXml(sitemapEntries);

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
