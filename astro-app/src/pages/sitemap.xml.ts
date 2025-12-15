const siteUrl = import.meta.env.VITE_SITE_URL || "http://localhost:4321"

export async function GET() {
  const sitemapIndexXml = `
  <?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>${siteUrl}/sitemap-0.xml</loc>
    </sitemap>
  </sitemapindex>`.trim();

  return new Response(sitemapIndexXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
